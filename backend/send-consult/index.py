import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с формы консультации на почту neo-vision@inbox.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    task = body.get('task', '').strip()
    direction = body.get('direction', 'не указано')

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    direction_label = 'Строительство' if direction == 'build' else 'ИТ-решения' if direction == 'it' else direction

    html_body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; border-radius: 8px;">
      <div style="background: #080d14; color: white; padding: 24px; border-radius: 8px 8px 0 0; border-bottom: 3px solid #00d4ff;">
        <h2 style="margin: 0; color: #00d4ff; font-size: 20px;">🔔 Новая заявка с сайта</h2>
        <p style="margin: 4px 0 0; color: #888; font-size: 13px;">ООО «Нео-Вижен» — нео-вижен.рф</p>
      </div>
      <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; width: 140px; border-bottom: 1px solid #eee;">Имя</td>
            <td style="padding: 10px 0; font-weight: bold; font-size: 15px; border-bottom: 1px solid #eee;">{name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; border-bottom: 1px solid #eee;">Телефон</td>
            <td style="padding: 10px 0; font-weight: bold; font-size: 15px; border-bottom: 1px solid #eee;">
              <a href="tel:{phone}" style="color: #00d4ff; text-decoration: none;">{phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; border-bottom: 1px solid #eee;">Направление</td>
            <td style="padding: 10px 0; font-size: 15px; border-bottom: 1px solid #eee;">
              <span style="background: #e8f7ff; color: #0077cc; padding: 2px 10px; border-radius: 12px; font-size: 13px; font-weight: 600;">{direction_label}</span>
            </td>
          </tr>
          {"<tr><td style='padding: 10px 0; color: #666; font-size: 13px;'>Задача</td><td style='padding: 10px 0; font-size: 14px; color: #333; line-height: 1.5;'>" + task + "</td></tr>" if task else ""}
        </table>
      </div>
    </div>
    """

    smtp_password = os.environ['SMTP_PASSWORD']
    smtp_user = 'neo-vision@inbox.ru'
    smtp_host = 'smtp.mail.ru'
    smtp_port = 465

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {name} — {direction_label}'
    msg['From'] = f'Сайт Нео-Вижен <{smtp_user}>'
    msg['To'] = smtp_user
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
