import random

# My game name
game_name = 'burrito_word_guessing'

# Defining words as a list
words = list()

# Words file opening and Looping through the file to get each line
with open('words.txt', 'r') as f:
    for line in f:
        line = line.rstrip()
        words.append(line)

# Choosing the answer from the words
answer = random.choice(words)

# Just for Debug
print(answer)

# Variables to track progress and attempts
missplaced = list()
incorrect = list()
max_tries = 5
current_try = 0

# Welcome to the user
print(f'Welcome! to {game_name}, as you can think, this is an guessing the word game, have fun!' )
print(f'The word that you are gonna guess, have a total of {len(answer)} letters, and you have {max_tries - current_try} attempts left to guess it.')

# Loop that actually does the magic of the game
while current_try < max_tries:

    # User guess to compare
    usr_guess = input("Type your guess please: ")

    # User guess validation
    if usr_guess.isalpha() == False or len(usr_guess) != 5:
        print("That's not a valid question. Try again")
        continue

    # User guess converted to lowercase
    usr_guess.lower()

    # Variable to track the index
    idx_val = 0

    # Checking the missplaced and incorrect chars in the user guess
    for char in usr_guess:
        if char == answer[idx_val]:
            print(char,end=" ")
            if char in missplaced:
                missplaced.remove(char)
        elif char in answer:
            if char not in missplaced:
                missplaced.append(char)
        else:
            if char not in incorrect:
                incorrect.append(char)
            print("_", end=" ")
        idx_val += 1

    print("\n")
    print("Missplaced letters: ", missplaced)
    print("Incorrect letters: ", incorrect)

    # Updating the amount of current try
    current_try += 1

    # Comparing the user guess to the correct answer
    if usr_guess == answer:
        print("Congrats! You guess it! You Win!.")
        break

    # Checking the amount of attempts that user has
    if current_try == max_tries:
        print("Sorry, you lost. The word was", answer)
        break

    print("You have", max_tries - current_try, "turns left.")