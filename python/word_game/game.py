import random

### Flet to build a GUI
import flet as ft

### Main page
def main(page: ft.Page):

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
    page.bgcolor = ft.Colors.WHITE
    page.theme = ft.Theme(color_scheme_seed=ft.Colors.RED)
    page.theme_mode = ft.ThemeMode.LIGHT

    ### Information labels
    welcome_label = ft.Text(
        value=f'Welcome! to {game_name}, as you can think, this is an guessing the word game, have fun!',
        size=18,
        weight=ft.FontWeight.BOLD 
    )

    ### Guess label
    guess_label = ft.Text(value="Write your guess please: ")

    ### Pokeball image
    img = ft.Image(
        src=f"imgs/pokeball.jpg",
        width=100,
        height=100,
        fit=ft.ImageFit.CONTAIN
        )

    ### Guess field
    guess_field = ft.TextField(text_align=ft.TextAlign.CENTER, width=300)

    ### Result label
    result_label = ft.Text(value="Results will display below here: ")

    ### Result field
    result_field = ft.TextField(
        value="",
        read_only=True,
        border=ft.InputBorder.NONE,
        color= ft.Colors.WHITE,
        bgcolor=ft.Colors.BLACK 
    )

    ### Missmatched label
    missmatch_label = ft.Text(value="Missmatched letters will display below here: ")

    ### Missmatched field
    missmatch_field = ft.TextField(
        value="",
        read_only=True,
        border=ft.InputBorder.NONE,
        color= ft.Colors.WHITE,
        bgcolor=ft.Colors.BLACK 
    )

    ### Incorrect label
    incorrect_label = ft.Text(value="Incorrect letters will display below here: ")

    ### Incorrect field
    incorrect_field = ft.TextField(
        value="",
        read_only=True,
        border=ft.InputBorder.NONE,
        color= ft.Colors.WHITE,
        bgcolor=ft.Colors.BLACK 
    )

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

        print("Result: ", " ".join(display))
        result_field.value = display
        print("Missplaced letters:", missplaced)
        missmatch_field.value = missplaced
        print("Incorrect letters:", incorrect)
        incorrect_field.value = incorrect

        page.update()

        current_try += 1

        # Win condition
        if usr_guess == answer:
            print("Congrats! You guessed it! You win!")
            return

        # Lose condition
        if current_try == max_tries:
            print("You lost. The word was:", answer)
            return

        print("Turns left:", max_tries - current_try)

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
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                img
            ]
        ),

        ### Result label
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                result_label
            ]
        ),

        ### Result field
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                result_field
            ]
        ),

        ### Guess label
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                guess_label
            ]
        ),

        ### Guess field
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                guess_field,
            ],
        ),

        ### Submit button
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                ft.IconButton(ft.CupertinoIcons.ARROW_RIGHT, on_click=submit),
            ],
        ),

        ### Missmatch label
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                missmatch_label
            ]
        ),

        ### Missmatch field
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                missmatch_field
            ]
        ),

        ### Incorrect label
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                incorrect_label
            ]
        ),

        ### Incorrect field
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                incorrect_field
            ]
        )
    )

### Executing the app
ft.app(target=main, view=ft.AppView.FLET_APP)