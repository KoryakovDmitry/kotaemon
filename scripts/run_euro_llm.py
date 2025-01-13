from transformers import AutoModelForCausalLM, AutoTokenizer

model_id = "utter-project/EuroLLM-9B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id)

messages = [
    # {
    #     "role": "system",
    #     "content": "You are EuroLLM --- an AI assistant specialized in European languages that provides safe, educational and helpful answers.",
    # },
    {
        "role": "user", "content": "who was president of US in 2023"
    },
    ]

inputs = tokenizer.apply_chat_template(messages, tokenize=True, add_generation_prompt=True, return_tensors="pt")
outputs = model.generate(inputs, max_new_tokens=1024)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
