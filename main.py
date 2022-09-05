from flask import Flask, render_template, send_from_directory, url_for
import os


application = Flask(__name__)


@application.route('/')
def main():
    return render_template('index.html')


@application.route('/example')
def example():
    return render_template('example.html')


@application.route('/use')
def use():
    return render_template('use.html')


@application.route('/whatIsIt')
def whatIsIt():
    return render_template('whatIsIt.html')


@application.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(application.root_path, 'static'),
                          'favicon.png', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=5001, debug=True)