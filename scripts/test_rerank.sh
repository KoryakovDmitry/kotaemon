curl 127.0.0.1:8111/rerank \
    -X POST \
    -d '{"query": "ce este Horticultură?", "texts": ["Horticultură nu este...", "Horticultură este..."]}' \
    -H 'Content-Type: application/json'