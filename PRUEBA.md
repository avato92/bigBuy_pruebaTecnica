# Prueba técnica BigBuy
Prueba técnica realizada para la empresa BigBuy por Alejandro Vañó Tomás

## Comandos

### `npm start`

Arranca la aplicación en modo desarrollo.

En la dirección [http://localhost:3000](http://localhost:3000).

### `npm test`

Lanza la batería de test

### `npm run test:coverage`

Lanza los tests y a la vez, nos informa de la cobertura del código

### `npm run lint`

Comprueba la sintaxis del código y si se ha incumplido alguna normal del standard de AirB&B

### `npm run lint:fix`

En caso de detectar errores puede solucionarlos automaticamente


## Impresiones de la prueba

La realización de esta prueba me habrá llevado unas 10 horas de trabajo, no es una prueba compleja, pero requiere dedicarle muchas horas,
creo que mi máximo rival ha sido el reloj y tener que terminar la prueba a contrareloj para poderla entregar.

En el tintero se me han quedado muchas cosas por poder implementar, más testing, un mejor clean code, la separación de todo el código en
componentes más pequeños, una UI más parecida al de Figma.

## Mejoras no implementadas

Aparte de lo ya mencionado anteriormente, me planteé usar metodología Git flow para el desarrollo de la prueba, pero como era una sola persona
finalmente descarté la idea.

Creo que me hubiese gustado implementar una funcionalidad de multi delete, es decir, que en vez de hacer 'click' por cada registro que queremos eliminar, elaborar una funcionalidad en la que se puede seleccionar varios registros y eliminarlo todo.

Queria implementar también que la tabla con los registros tubiese columnas opcionales, dependiendo del tamaño de la pantalla.

## Mejoras implementadas

He usado husky para el identado y testeo de la aplicación, que se comprobase todo antes de ser subido al github.

Para el tratamiento del estado global, he usado redux toolkit, una libreria que no conocía, me la recomendaron y decidí probar en este proyecto.
Sinceramente, me ha sorprendido gratamente, primero porque te monta todo para tener redux, listo, lo fácil que es de usar, una vez tienes un estado y necesitas del reducer para manipular esa información. Y lo sencillo que ha sido testear el reducer, creo que hasta la fecha, nunca había
sido capaz de testear un reducer de redux y con esta librería lo ha facilitado todo muchísimo.

El uso de Material UI, no soy partidario del uso de librerias de CSS externas, prefiero el CSS nativo, como bien dije en las anteriores entrevistas, pero si que he de decir, que me han facilitado mucho la entrega de este ejercicio, aunque sigo  pensando que para aplicaciones pequeñas pueden ir bien, para grandes al final generan más dolor de cabeza.


## Conclusión

No estoy del todo contento con el resultado de mi aplicación, creo que podría haber hecho mucho más y mejor. Sin embargo, para el plazo de tiempo que se me ha dado y en el cual he tenido que hacer esta prueba, estoy contento.
