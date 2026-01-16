### I'll put some image components here to keep all modulated
import flet as ft

def pokeball_image(image: ft.Control):
    return ft.Row(
        alignment=ft.MainAxisAlignment.CENTER,
        controls=[image]
    )