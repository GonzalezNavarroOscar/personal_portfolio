### I'll build some cards on this folder to use them
import flet as ft

def result_card(result_label: ft.Text, result_field: ft.Control):
    return ft.Card(
        shadow_color=ft.Colors.ON_SURFACE_VARIANT,
        content=ft.Container(
            width=400,
            padding=10,
            content=ft.Column(
                [
                    ft.Row(
                        alignment=ft.MainAxisAlignment.CENTER,
                        controls=[result_label],
                    ),
                    ft.Row(
                        alignment=ft.MainAxisAlignment.CENTER,
                        controls=[result_field],
                    ),
                ]
            ),
        ),
    )

def guess_card(guess_label: ft.Text, guess_field: ft.Control, on_submit):
    return ft.Card(
        shadow_color=ft.Colors.ON_SURFACE_VARIANT,
        content=ft.Container(
                width=400,
                padding=10,
                content=ft.Column(
                    [
                        ft.Row(
                            alignment=ft.MainAxisAlignment.CENTER,
                            controls=[guess_label],
                        ),
            
                        ft.Row(
                            alignment=ft.MainAxisAlignment.CENTER,
                            controls=[
                                guess_field,
                                ft.IconButton(
                                    ft.CupertinoIcons.ARROW_RIGHT,
                                    on_click=on_submit,
                                ),
                            ],
                        ),
                    ]
                ),
            ),
    )

def missmatch_card(missmatch_label: ft.Text, missmatch_field: ft.Control):
    return ft.Card(
        shadow_color=ft.Colors.ON_SURFACE_VARIANT,
        content=ft.Container(
                width=400,
                padding=10,
                content=ft.Column(
                    [
                        ft.Row(
                            alignment=ft.MainAxisAlignment.CENTER,
                            controls=[missmatch_label],
                        ),
            
                        ft.Row(
                            alignment=ft.MainAxisAlignment.CENTER,
                            controls=[
                                missmatch_field
                            ],
                        ),
                    ]
                ),
            ),
    )

def incorrect_card(incorrect_label: ft.Text, incorrect_field: ft.Control):
    return ft.Card(
        shadow_color=ft.Colors.ON_SURFACE_VARIANT,
        content=ft.Container(
                width=400,
                padding=10,
                content=ft.Column(
                    [
                        ft.Row(
                            alignment=ft.MainAxisAlignment.CENTER,
                            controls=[incorrect_label],
                        ),
            
                        ft.Row(
                            alignment=ft.MainAxisAlignment.CENTER,
                            controls=[
                                incorrect_field
                            ],
                        ),
                    ]
                ),
            ),
    )