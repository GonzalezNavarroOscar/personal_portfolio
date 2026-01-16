import random

### Flet to build a GUI
import flet as ft

### Some imports to keep it modulated
from components.cards import guess_card, missmatch_card, result_card, incorrect_card
from components.images import pokeball_image

### Main page
def main(page: ft.Page):

    def submit(e):

        ### Using the global variables
        nonlocal current_try, missplaced, incorrect

        ### Stop if game already ended
        if current_try >= max_tries:
            print("Game over. Restart the app to play again.")
            return

        usr_guess = guess_field.value.lower().strip()

        # Validation
        if not usr_guess.isalpha():
            print("Only letters are allowed.")
            return

        print(f"\nTry {current_try + 1}/{max_tries}")

        display = []

        # Check letters
        for char, ans_char in zip(usr_guess, answer):
            if char == ans_char:
                display.append(char.upper())
                if char in missplaced:
                    missplaced.remove(char)
            elif char in answer:
                display.append("_")
                if char not in missplaced:
                    missplaced.append(char)
            else:
                display.append("_")
                if char not in incorrect:
                    incorrect.append(char)

        current_try += 1

        try_label.value = f"You have {max_tries - current_try} attempts left"
        print("Result: ", " ".join(display))
        result_field.value = display
        print("Missplaced letters:", missplaced)
        missmatch_field.value = missplaced
        print("Incorrect letters:", incorrect)
        incorrect_field.value = incorrect


        page.update()

        # Win condition
        if usr_guess == answer:
            print("Congrats! You guessed it! You win!")
            return

        # Lose condition
        if current_try == max_tries:
            print("You lost. The word was:", answer)
            return

        print("Turns left:", max_tries - current_try)

    ### My game name
    game_name = 'Pokemon Guess Game'

    ### Defining words as a list
    words = list()

    ### Words file opening and Looping through the file to get each line
    with open('words.txt', 'r') as f:
        for line in f:
            line = line.rstrip().lower()
            words.append(line)

    ### Choosing the answer from the words
    answer = random.choice(words)

    print(answer)

    ### Variables to track progress and attempts
    missplaced = list()
    incorrect = list()
    max_tries = 5
    current_try = 0

    ### Page definition and alignment
    page.title = game_name
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    ### Page theme
    page.bgcolor = '#ffd57b'
    page.theme = ft.Theme(color_scheme_seed=ft.Colors.RED)
    page.theme_mode = ft.ThemeMode.LIGHT

    ### Information labels
    welcome_label = ft.Text(
        value=f'Welcome! to {game_name}, as you can think, this is an guessing the word game, have fun!',
        size=18,
        weight=ft.FontWeight.BOLD 
    )

    ### Pokeball image info
    poke_img = ft.Image(
        src=f"imgs/pokeball.png",
        width=100,
        height=100,
        fit=ft.ImageFit.CONTAIN
        )
    
    ### Pokeball image modulated
    pokeball_img = pokeball_image(poke_img)
    
    ### Guess label
    guess_label = ft.Text(value="Write your guess please: ")

    ### Guess field
    guess_field = ft.TextField(text_align=ft.TextAlign.CENTER, width=300)

    ### Guess card modulated
    g_card = guess_card(guess_label,guess_field, submit)

    ### Try counter label
    try_label = ft.Text(value=f"",text_align=ft.TextAlign.CENTER, width=300)

    ### Result label
    result_label = ft.Text(value="Results")

    ### Result field
    result_field = ft.TextField(
        value="",
        read_only=True,
        bgcolor=ft.Colors.WHITE,
        border_color=ft.Colors.BLACK,
        border_radius=10
    )

    ### Result card modulated
    res_card = result_card(result_label, result_field)

    ### Missmatched label
    missmatch_label = ft.Text(value="Missmatched letters")

    ### Missmatched field
    missmatch_field = ft.TextField(
        value="",
        read_only=True,
        bgcolor=ft.Colors.WHITE,
        border_color=ft.Colors.BLACK,
        border_radius=10
    )

    ### Missmatched card modulated
    miss_card = missmatch_card(missmatch_label, missmatch_field)

    ### Incorrect label
    incorrect_label = ft.Text(value="Incorrect letters")

    ### Incorrect field
    incorrect_field = ft.TextField(
        value="",
        read_only=True,
        bgcolor=ft.Colors.WHITE,
        border_color=ft.Colors.BLACK,
        border_radius=10
    )

    ### Incorrect card modulated
    inc_card = incorrect_card(incorrect_label, incorrect_field)

    ### Creation of the page
    page.add(

        ### Welcome to the user label
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                welcome_label
            ]
        ),

        ### Pokeball image
        pokeball_img,

        ### Try counter label
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                try_label
            ]
        ),

        ft.Column(
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                ft.Row(
                    [
                        ### Guess card
                        g_card,
        
                        ### Result card
                        res_card,
                    ]
                ),
        
                ft.Row(
                    [
                        ### Missmatched card
                        miss_card,
        
                        ### Incorrect card
                        inc_card
        
                    ]
                ),
            ]
        )
    )

### Executing the app
ft.app(target=main, view=ft.AppView.FLET_APP)