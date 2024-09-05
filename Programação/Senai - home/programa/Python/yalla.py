import tkinter as tk
import tkinter
from tkinter import messagebox, Scrollbar
import customtkinter 
import mysql.connector as db
import ctypes

myappid = 'yalla.gerenciamentomotoboys.1.0'  # arbitrary string
ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)

# Creating connection object
mydb = db.connect(
    host="localhost",
    user="adm",
    password="grupofoda123"
)

# Printing the connection object
print(mydb)
DARK_MODE = "dark"
customtkinter.set_appearance_mode(DARK_MODE)
customtkinter.set_default_color_theme("../violet.json")


class App(customtkinter.CTk):
    frames = {}
    current = None
    bg = ""

    def __init__(self):
        super().__init__()
        self.bg = self.cget("fg_color")
        self.num_of_frames = 0

        self.title("Gerenciamento Yalla")
        self.iconbitmap('./icon.ico')

        main_container = customtkinter.CTkFrame(
            self, corner_radius=8, fg_color=self.bg)
        main_container.pack(fill=tk.BOTH, expand=True, padx=8, pady=8)

        self.right_side_panel = customtkinter.CTkFrame(
            main_container, corner_radius=8, fg_color="#212121")
        self.right_side_panel.pack(
            side=tkinter.LEFT, fill=tkinter.BOTH, expand=True, padx=0, pady=0)
        self.right_side_panel.configure(border_width=1)
        self.create_login_frame("principal")
        self.create_frame_with_list("segunda", ["Brendon", "Bruno", "Daniel", "Jackson", "Jean", "João", "Léo", "Mateus", "Pedro"])
        self.create_frame_enderecos("terceira")

        self.current = self.frames["principal"]
        self.current.pack(in_=self.right_side_panel, side=tkinter.TOP,
                          fill=tkinter.BOTH, expand=True, padx=0, pady=0)

    def create_login_frame(self, frame_id):
        def login_button_click():
            # Get the username and password from entry widgets
            username = username_entry.get()
            password = password_entry.get()

            # Check the username and password
            # if username != 'admin' or password != 'admin':
            #     messagebox.showerror('Erro', 'Usuário ou senha incorretos')
            # else:
            #     self.toggle_frame_by_id("segunda")
            self.toggle_frame_by_id("segunda")

        def on_enter_pressed(event):
            focused_widget = self.focus_get()
            if (focused_widget == password_entry):
                login_button_click()
        App.frames[frame_id] = customtkinter.CTkFrame(
            self, fg_color=self.cget("fg_color"))
        App.frames[frame_id].configure(corner_radius=8)
        App.frames[frame_id].padx = 8

        # Left Side (Image)
        left_frame = customtkinter.CTkFrame(
            App.frames[frame_id], corner_radius=8, fg_color='purple', width=300)
        left_frame.pack(side=tkinter.LEFT, fill=tkinter.BOTH, expand=True)

        # Image (placeholder)
        # image_label = customtkinter.CTkLabel(left_frame, image="example_image.png")
        # image_label.pack(pady=20)

        # Right Side (Login Info)
        right_frame = customtkinter.CTkFrame(
            App.frames[frame_id], corner_radius=8, fg_color='transparent')
        right_frame.pack(side=tkinter.LEFT, fill=tkinter.BOTH, expand=True)

        # Centering Login
        center_frame = customtkinter.CTkFrame(
            right_frame, corner_radius=8, fg_color='transparent')
        center_frame.pack(side=tkinter.TOP, fill=tkinter.BOTH,
                          expand=True, pady=20, padx=20)  # Adicionando padding para centralizar

        # Login Info
        username_label = customtkinter.CTkLabel(
            center_frame, text="Usuario:")
        username_label.grid(row=0, column=0, padx=10, pady=10, sticky='w')
        username_entry = customtkinter.CTkEntry(center_frame)
        username_entry.grid(row=0, column=1, padx=10, pady=10)

        password_label = customtkinter.CTkLabel(
            center_frame, text="Senha:")
        password_label.grid(row=1, column=0, padx=10, pady=10, sticky='w')
        password_entry = customtkinter.CTkEntry(center_frame, show="*")
        password_entry.grid(row=1, column=1, padx=10, pady=10)

        login_button = customtkinter.CTkButton(
            center_frame, text="Entrar", command=login_button_click)
        login_button.grid(row=2, column=1, padx=10, pady=10)

        self.bind("<Return>", on_enter_pressed)

        def setMode(m):
            customtkinter.set_appearance_mode(m)

        def switcher():
            global DARK_MODE
            if(DARK_MODE == 'dark'):
                DARK_MODE = 'light'
                print(DARK_MODE)
                setMode(DARK_MODE)
            else:
                DARK_MODE = 'dark'
                print(DARK_MODE)
                setMode(DARK_MODE)
        my_switch = customtkinter.CTkSwitch(center_frame, text="Modo escuro", command=switcher,
                                            #width=200,
                                            #height=100,
                                            switch_width=50,
                                            switch_height=25,
                                            #corner_radius=10,
                                            font=("Helvetica", 10),
                                            state="normal")
        my_switch.place(relx=0.6, rely=0.9)

    def create_frame_with_list(self, frame_id, names):
        App.frames[frame_id] = customtkinter.CTkFrame(
            self, fg_color=self.cget("fg_color"))
        App.frames[frame_id].configure(corner_radius=8)
        App.frames[frame_id].padx = 8

        # Criar um Frame para centralizar os elementos
        center_frame = customtkinter.CTkFrame(
            App.frames[frame_id], corner_radius=8, fg_color='transparent')
        center_frame.pack(expand=True, fill=tkinter.BOTH, padx=20, pady=20)  # Adicionar preenchimento

        # Quadro para os títulos das colunas
        title_frame = customtkinter.CTkFrame(
            center_frame, corner_radius=8, fg_color='transparent')
        title_frame.pack(fill=tkinter.X)

        a = customtkinter.CTkLabel(
            title_frame, text='Motoristas', bg_color='transparent', font=("Helvetica", 26))
        a.pack(side=tkinter.LEFT, padx=15)
        
        b = customtkinter.CTkLabel(
            title_frame, text='Taxa dia', bg_color='transparent', font=("Helvetica", 26))
        b.pack(side=tkinter.LEFT, padx=15)
        
        c = customtkinter.CTkLabel(
            title_frame, text='Taxa Mês', bg_color='transparent', font=("Helvetica", 26))
        c.pack(side=tkinter.LEFT, padx=15)

        # Quadro para os elementos do looping
        for idx, name in enumerate(names, start=1):
            if idx <= 9:  # Limitar até o número 9
                name_frame = customtkinter.CTkFrame(
                    center_frame, corner_radius=8, fg_color='transparent')
                name_frame.pack(fill=tkinter.X)

                name_button = customtkinter.CTkButton(name_frame, text=f"{idx}. {name}", bg_color='transparent', cursor="hand2", font=(
                    "Helvetica", 26), command=lambda n=name: self.nomeClicado(n), anchor='w')
                name_button.pack(side=tkinter.LEFT, padx=10)

                # Adicionando texto na segunda coluna
                text = f"R$:{100*idx}"
                text_label = customtkinter.CTkLabel(
                    name_frame, text=text, bg_color='transparent', font=("Helvetica", 26))
                text_label.pack(side=tkinter.LEFT, padx=10)

                # Adicionando botão na terceira coluna
                button = customtkinter.CTkButton(
                    name_frame, text=f"Resultados", bg_color='transparent', cursor="hand2", font=("Helvetica", 26))
                button.pack(side=tkinter.LEFT, padx=10)

    def create_frame_enderecos(self, frame_id):
        App.frames[frame_id] = customtkinter.CTkFrame(
            self, fg_color=self.cget("fg_color"))
        App.frames[frame_id].configure(corner_radius=8)
        App.frames[frame_id].padx = 8

        # Endereços
        endereco_label = customtkinter.CTkLabel(
            App.frames[frame_id], text="Endereços", font=("Helvetica", 16))
        endereco_label.pack(pady=10)

        voltar_button = customtkinter.CTkButton(
            App.frames[frame_id], text="Voltar para Início", command=lambda: self.toggle_frame_by_id("principal"))
        voltar_button.pack(pady=10)

    def nomeClicado(self, name):
        self.toggle_frame_by_id("terceira")

    def toggle_frame_by_id(self, frame_id):
        if App.frames[frame_id] is not None:
            self.current.pack_forget()
            self.current = App.frames[frame_id]
            self.current.pack(in_=self.right_side_panel, side=tkinter.TOP,
                              fill=tkinter.BOTH, expand=True, padx=0, pady=0)


if __name__ == "__main__":
    app = App()
    app_width = 800
    app_height = 650

    screen_width = app.winfo_screenwidth()
    screen_height = app.winfo_screenheight()

    x = (screen_width / 2) - (app_width / 2)
    y = (screen_height / 2) - (app_height / 2)

    app.geometry(f"{app_width}x{app_height}+{int(x)}+{int(y)}")
    app.mainloop()
