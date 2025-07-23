import random

# List of ancestral proverbs
proverbs = [
    {
        "yoruba": "Ẹni tí ó bá fẹ́ràn ìkà, òun náà máa jẹ́ kó rí ire.",
        "translation": "He who loves wickedness shall not see goodness.",
        "meaning": "Spread good vibes, not chaos. Karma no dey sleep."
    },
    {
        "yoruba": "Ìwà lẹ̀wà, kì í ṣe ojú.",
        "translation": "Character is beauty, not the face.",
        "meaning": "Your vibe > your skin. Be premium inside and out."
    },
    {
        "yoruba": "Kí á má ṣàì jìyà, kì í ṣe àdúrà.",
        "translation": "To never suffer is not a realistic prayer.",
        "meaning": "Pain is part of the upgrade. Trust the process."
    },
    {
        "yoruba": "Agbára ọkùnrin kì í tán l'ọ́kọ̀ ẹlẹ́dẹ̀.",
        "translation": "A man's strength does not end in a pig's corral.",
        "meaning": "Don't waste your energy where it’s not valued."
    },
    {
        "yoruba": "Bí ọ̀ràn bá ṣokùnkùn, àlùfáà ní ń mọ̀ọ́kùn.",
        "translation": "If the matter is too dark, the priest will light the path.",
        "meaning": "Even deep confusion has its solution. Keep calm and debug."
    }
]
def consult_oracle():
    proverb = random.choice(proverbs)
    print("\n🔮 Yoruba Oracle says:\n")
    print(f"🗣️ Proverbs: {proverb['yoruba']}")
    print(f"🌍 Translation: {proverb['translation']}")
    print(f"💡 Meaning: {proverb['meaning']}")
# Run the Oracle
while True:
    consult_oracle()
    
    again = input("\n🔁 Want another proverb? (yes/no): ").strip().lower()
    if again != 'yes':
        print("\n👋 Oracle rests for now. Walk in wisdom.\n")
        break

# This function can be called to get a random Yoruba proverb with its translation and meaning.