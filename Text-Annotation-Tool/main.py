from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests (important for frontend-backend connection)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/annotate", methods=["POST"])
def annotate():
    data = request.get_json()
    text = data.get("text")
    annotations = data.get("annotations")

    # For now, just echo back the data
    response = {
        "message": "Annotation received!",
        "text": text,
        "annotations": annotations
    }
    return jsonify(response), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

