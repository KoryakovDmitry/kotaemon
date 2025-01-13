#!/bin/bash

echo "Starting Ollama server..."
ollama serve &  # Start Ollama in the background

echo "Ollama is ready, creating the model..."

ollama create EuroLLM-9B-Instruct -f models/EuroLLM-9B-Instruct/Modelfile

echo "Ollama FINISH creating the model..."