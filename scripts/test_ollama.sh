curl http://localhost:11434/api/chat -d '{
  "model": "EuroLLM-9B-Instruct",
  "messages": [
    { "role": "user", "content": "de ce este cerul albastru?" }
  ]
}'