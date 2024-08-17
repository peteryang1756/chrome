from flask import Flask, jsonify
from selenium import webdriver

app = Flask(__name__)

@app.route('/run-selenium')
def run_selenium():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    driver = webdriver.Remote(
        command_executor='https://standalone-chrome-no5g.onrender.com/wd/hub',
        options=options
    )

    driver.get("https://google.com")
    title = driver.title
    driver.quit()

    return jsonify({"title": title})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
