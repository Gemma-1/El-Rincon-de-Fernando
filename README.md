1. Introducción y objetivo 

El proyecto «El rincón de Fernando» es una aplicación web realizada con Angular que representa la página de una cafetería. Su finalidad es presentar el establecimiento, mostrar su carta y ofrecer una zona de usuario con inicio de sesión, registro y consulta de información personal y puntos del club de fidelización. 

2. Funcionamiento general y navegación

Al iniciar la aplicación se carga AppComponent. Este componente muestra siempre la cabecera (HeaderComponent), un RouterOutlet donde Angular inserta la página seleccionada y el pie de página (FooterComponent). 
Las rutas configuradas en app.routes.ts son las siguientes: 

3. Descripción de los componentes de página

  3.1. Inicio (HomeComponent) 
  Es la página de bienvenida. Presenta el nombre de la cafetería, una breve descripción y una sección «Sobre nosotros». Incluye tarjetas destacadas que llevan a la carta o a la zona del    club de puntos, además de tarjetas con la dirección y el teléfono del establecimiento. Para construir estas tarjetas utiliza los componentes reutilizables TarjetaDestacadaComponent y     TarjetaInformacionComponent.

  3.2. Carta (CartaComponent) 
  Muestra la carta de la cafetería dividida en apartados: desayunos y comida. El contenido se presenta mediante imágenes almacenadas en los recursos estáticos del proyecto. En esta         versión la página es principalmente informativa y no incluye un sistema de pedidos ni selección de productos. 

  3.3. Inicio de sesión (LoginComponent) 
  Contiene un formulario con correo electrónico y contraseña. Los campos están enlazados con las propiedades email y password mediante [(ngModel)]. Al enviar el formulario se ejecuta       iniciarSesion(). Primero comprueba que los campos no estén vacíos y después llama a AuthService para validar las credenciales. Si son correctas, navega a /mi_cuenta; si no, muestra un    mensaje de error. El botón Cancelar limpia los campos y el mensaje. 
    Creamos una cuenta prototipo para la utilización de distintas funcionalidades de la web:  
                                Usuario: fernando@email.com ------>
                                Contraseña: Fernando123! 

  3.4. Registro (RegistroComponent) 
  Permite introducir nombre, apellidos, correo, teléfono y dos veces la contraseña. El método registrarUsuario() comprueba que todos los campos estén cumplimentados, que las contraseñas    coincidan y que la contraseña tenga al menos seis caracteres. Si se cumplen estas condiciones, muestra un mensaje de validación correcta. 
  Importante: en el código actual el formulario valida los datos, pero todavía no crea ni guarda una cuenta real. 

  3.5. Mi cuenta (MiCuentaComponent) 
  Presenta datos personales de ejemplo, los puntos acumulados, el progreso hacia la recompensa y un espacio para un código QR provisional. Los datos actuales están definidos como           propiedades en el componente. El progreso se calcula con los getters puntosRestantes y progreso, que evitan valores negativos y limitan el porcentaje al 100 %. La propia página indica    que la modificación de datos estará disponible próximamente. 

4. Diseño visual y experiencia de uso
   
La interfaz está dividida en secciones con una identidad común de cafetería. Se utilizan hojas CSS independientes para las páginas y componentes compartidos, además de una hoja de estilos global. La página de inicio prioriza la presentación del establecimiento y las tarjetas permiten acceder rápidamente a contenidos destacados. Los formularios muestran mensajes para orientar al usuario cuando faltan datos o las credenciales no son correctas.

5. Conclusión
   
«El rincón de Fernando» presenta una estructura modular en Angular, con cinco componentes de página, navegación mediante Angular Router, componentes compartidos y un servicio central para la sesión. La aplicación permite recorrer la información de la cafetería, consultar la carta, validar formularios y visualizar una zona de cuenta. 
Próximamente traeremos nuevas mejoras.

6. Enlaces del proyecto
   
Página web desplegada en Vercel: 
https://elrincondefernando.vercel.app

Repositorio del código fuente en GitHub: 
https://github.com/Gemma-1/El-Rincon-de-Fernando
