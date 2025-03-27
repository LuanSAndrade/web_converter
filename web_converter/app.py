from flask import Flask, render_template, request

app = Flask(__name__)

# Taxas fixas de conversão
TAXA_USD = 0.20  # 1 real = 0.20 dólares
TAXA_EUR = 0.18  # 1 real = 0.18 euros

@app.route('/', methods=['GET', 'POST'])
def index():
    valor_convertido = None
    if request.method == 'POST':
        valor_brl = float(request.form['valor_brl'])
        moeda = request.form['moeda']
        if moeda == 'USD':
            valor_convertido = valor_brl * TAXA_USD
        elif moeda == 'EUR':
            valor_convertido = valor_brl * TAXA_EUR
    return render_template('index.html', valor_convertido=valor_convertido)

if __name__ == '__main__':
    app.run(debug=True)
