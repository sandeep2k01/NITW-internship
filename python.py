import requests
from bs4 import BeautifulSoup
import json

def scrape_scholarships():
    url = 'http://127.0.0.1:5500/index.html'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Assume each scholarship is within a <div class="scholarship-item">
    scholarships = []
    for item in soup.find_all('div', class_='scholarship-item'):
        name = item.find('h2', class_='scholarship-name').text
        scholarship_type = item.find('span', class_='scholarship-type').text
        deadline = item.find('span', class_='deadline').text

        scholarships.append({
            'name': name,
            'type': scholarship_type,
            'deadline': deadline
        })

    # Save data as JSON
    with open('scholarships.json', 'w') as f:
        json.dump(scholarships, f, indent=4)

    print("Scraping complete. Data saved to scholarships.json")

if __name__ == '__main__':
    scrape_scholarships()


from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/scholarships')
def get_scholarships():
    with open('scholarships.json') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
