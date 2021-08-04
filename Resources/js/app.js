
var BlankData = [
    {
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
    }
]

var DataCountries = [
    {
        "id": "AE",
        "title": " ",
        "balloonText": "Emiratos Árabes Unidos",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "DE",
        title: "Alemania",
        balloonText: "Alemania",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Marzo 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Clases en grupos reducidos, preestablecidos y asegurando un número mínimo de contactos entre los escolares. Nuevo sistema de gestión de aprendizaje comprado de Noruega (país con más de 20 años de experiencia). Educación Digital. Los profesores toman cursos en materia de educación a distancia. La presencialidad estará sujeta al número de contagios de cada región, por lo anterior un objetivo es mejorar la educación en línea. En Berlín, asisten ya a clases alumnos y alumnas de primero al tercer grado, en presencia escalonada. A partir de este martes harán lo mismo alumnos y alumnas del cuarto al sexto grado en las escuelas berlinesas. En Baviera podrán regresar a clases alumnos y alumnas de la educación básica el próximo 15 de marzo, si las tasas de contagios se mantienen en un bajo nivel. En Brandemburgo también se reanudarán las clases en la educación media superior, alternadamente. En Hamburgo, padres de familia pueden decidir si sus hijas e hijos van a clases presenciales, o si mantienen el home schooling. En Baja Sajonia se regresa a las clases presenciales, siempre y cuando la tasa de contagis no rebase los 100 por cada 100.000 habitantes. En Sajonia, las clases en la educación básica se reanudaron de manera presencial desde febrero, y a partir del 15 de marzo seguirá el resto del alumnado.",
        aforosFiltrosSanitarios: "Los colegios mantienen las clases presenciales en aquellos lands donde suman 200 casos por cada 100,000 habitantes en siete días, aunque a partir de los 100 positivos serán obligatorios dos test rápidos de antígenos semanales. Uso obligatorio de cubre bocas en pasillos, escaleras y comedor. En algunas escuelas con bajo contagio el uso del cubre bocas en las aulas no es obligatorio si se mantiene una distancia de 1-5 mts. Se mantienen los filtros sanitarios",
        "color": "rgba(0, 24, 75, 1)"
    },
    {
        "id": "AF",
        "title": " ",
        "balloonText": "Afganistán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "AL",
        "title": " ",
        "balloonText": "Albania",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "AM",
        "title": " ",
        "balloonText": "Armenia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "AO",
        "title": " ",
        "balloonText": "Angola",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "AR",
        title: "Argentina",
        balloonText: "Argentina",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Febrero de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Protocolo Marco",
        actividadesPresenciales: "Pensar en alternativas para la organización o habilitación de espacios no escolares de intercambio de la comunidad y espacios de encuentro de estudiantes. Calendario escolar diferenciado por jurisdicción. Generar espacios de trabajo alternativo y tutoriales que aborden dudas e incertidumbres que genera la pandemia. Proponer estrategias educativas lúdicas que apunten al cuidado de la salud y la integridad de los niños. Valoración de la salud emocional. Se privilegia el uso de espacios al aire libre. Grupos burbuja. Se deben diseñar prácticas de enseñanza bajo un escenario multimodal. En el caso de Argentina se presentan 3 modalidades de escolarización: Presencial: supone la asistencia regular a la escuela todos los días de la semana en el horario establecido por cada jurisdicción. Sólo podrá implementarse en las escuelas en las que la relación entre la cantidad de estudiantes y el espacio físico permita cumplir con el distanciamiento físico establecido en los protocolos. No presencial: supone que toda la escolaridad se cursa sin asistencia a actividades presenciales. Queda reservada a estudiantes que por razones de salud pertenezcan a grupos de riesgo y no puedan asistir a la escuela de manera presencial y a estudiantes matriculados en escuelas en las que, por decisión de las autoridades educativas y sanitarias jurisdiccionales, no puedan habilitarse actividades presenciales.  Combinada: alterna tiempos de trabajo de los y las estudiantes con asistencia a la escuela en clases presenciales y actividades educativas en situaciones de no presencialidad mediados por diferentes instrumentos y soportes. Se implementará en todos los casos que sea necesario para asegurar el sostenimiento de la norma básica de distanciamiento físico disminuyendo la densidad de ocupación de las aulas y los edificios escolares. Esto requerirá organizar a los y las estudiantes en grupos más reducidos conforme a diferentes criterios y definir regímenes de alternancia de días y horarios de asistencia a la escuela de cada grupo.",
        aforosFiltrosSanitarios: "Pensar en alternativas para la organización o habilitación de espacios no escolares de intercambio de la comunidad y espacios de encuentro de estudiantes. El regreso a clases es según la situación epidemiológica de cada localidad. La alternancia establece que el regreso a las actividades presenciales se realizará, en todos los casos, bajo las condiciones de seguridad sanitaria establecidas en los protocolos aprobados por el CONSEJO FEDERAL DE EDUCACIÓN y en los planes y protocolos jurisdiccionales, que serán actualizados en base al conocimiento producido a la fecha sobre medidas de prevención, la experiencia internacional en materia educativa y los hábitos instalados fuera de la escuela.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "AT",
        title: "Austria",
        balloonText: "Austria",
        regresoActividadesPresenciales: "No considerado para el análisis",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "AU",
        title: "Australia",
        balloonText: "Australia",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "25 de mayo: Nueva de Gales del Sur, Queensland y Tasmania, 26 de mayo: estado de Victoria para cursos inferiores y superiores y el resto de niveles regresarán el 9 de junio",
        tipoModelo: "Normal",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "Sin información",
        actividadesPresenciales: "Para hacer posible el regreso a los colegios se han adoptado estrictas medidas de higiene y se han prohibido actividades como las competencias escolares y las excursiones en estados como Nueva de Gales del Sur, Queensland y Tasmania. <br><br> Pese a los resguardos que han tomado las autoridades para evitar los contagios de coronavirus (COVID-19), más de siete mil padres y apoderados han firmado una petición en el portal Change.org para que el regreso a las clases presenciales en Nueva Gales del Sur no sea de carácter obligatorio. <br><br>  En cuanto a las universidades, aún se sigue estudiando cómo y cuándo regresar. Sin embargo, esta decisión recae en cada plantel y su respectivo estado.",
        aforosFiltrosSanitarios: "Regresan el total de la comunidad escolar para los niveles que retornan a clases presenciales, tanto alumnos, profesores y trabajadores se integrarán a las actividades académicas y laborales normales, siguiendo las medidas de distanciamiento social, uso de mascarilla en caso de tener tener síntomas respiratorios y el uso de desinfectante a base de alcohol.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "AZ",
        "title": " ",
        "balloonText": "Azerbaiyán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BA",
        "title": " ",
        "balloonText": "Bosnia y Herzegovina",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BD",
        "title": " ",
        "balloonText": "Bangladesh",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "BE",
        title: "Bélgica",
        balloonText: "Bélgica",
        regresoActividadesPresenciales: "SI",
        fechaRetorno: "Septiembre 2020",
        tipoModelo: "Normal",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "close",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Preescolar, primaria y secundaria volvieron a clases presenciales el 1 de septiembre del 2020. A tiempo pleno primaria y 1 er grado de secundaria de forma simultánea, los cinco días de la semana y sin restricciones de alumnos por clase; los restantes grados de este nivel lo hicieron con capacidad al 50%.  Es cada escuela la que decide la organización de sus clases para cumplir con esta norma, que en el caso de la educación especial se aplica ''solo cuando es posible teniendo en cuenta las necesidades de los alumnos''. Tanto en primaria como en secundaria es obligatorio el uso de mascarilla y solo hay clases de educación física en primaria, que siempre que sea posible deben celebrarse en el exterior.  Para el ingreso posterior a las vacaciones decembrinas, se decretó que los educacandos que hubiesen salido al extranjero, deberían guardar una cuarentena de 10 días antes de incorporarse a clases sólo acortable si se da negativo en una PCR realizada el séptimo día tras el regreso. La primera semana completa de clases totalmente presenciales fue a partir del lunes 17 de mayo. El regreso a las clases para todos - Primaria casi siempre ha sido cien por cien presencial-, que se produce a menos de ocho semanas del final del curso escolar, se vivirá, sin embargo, de forma muy diferente en cada centro ya que, según las regiones, unos reducirán los exámenes para dar prioridad a la continuación de las clases y en otros se aplicará la autonomía pedagógica.",
        aforosFiltrosSanitarios: "Salidas escalonadas a recreo,  padres, madres y cuidadores deberán mantener distancia física y acudir solamente un adulto a llevar al educando. Cada clase acogerá un máximo de 24 adolescentes simultáneamente y será obligatorio el uso de mascarillas, utilizar gel hidroalcohólico, respetar las distancias, dar prioridad a las clases de gimnasia al aire libre o impartir las clases con las ventanas abiertas y ventilar las aulas antes y después, así como durante los descansos, para limitar los riesgos de contaminación.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "BF",
        "title": " ",
        "balloonText": "Burkina Faso",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BG",
        "title": " ",
        "balloonText": "Bulgaria",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BI",
        "title": " ",
        "balloonText": "Burundi",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BJ",
        "title": " ",
        "balloonText": "Benin",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "BO",
        title: "Bolivia",
        balloonText: "Bolivia",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "1 de febrero de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Año por la Recuperación del Derecho a la Educación",
        actividadesPresenciales: "Según cada región, las clases serán presenciales, semipresenciales o a través de internet. En la presencial se realiza el curso normal, pero con normas de bioseguridad; en semipresencial hay alternancia en la asistencia de estudiantes a la unidad educativa, con la finalidad de evitar las aglomeraciones. Actualmente asisten a las escuelas niñas y niños de poblaciones rurales, adonde aún no llegó la segunda ola. Se han establecido tres formas de atención a los alumnos: Modalidad presencial. Implica la presencia física de las y los estudiantes, personal docente y administrativo, que interactúan en el desarrollo del proceso de aprendizaje en el espacio de la unidad educativa. Las unidades educativas que cuenten con un número menor o igual a 20 estudiantes por paralelo y año de escolaridad podrán optar por esta modalidad, con todas las medidas de bioseguridad de acuerdo con el protocolo establecido. Modalidad semipresencial. Consiste en la combinación de la modalidad presencial y a distancia, con alternancia entre ambas modalidades, desarrollando los procesos de aprendizaje en la unidad educativa y en el domicilio. Las unidades educativas que cuenten con un número mayor a 20 estudiantes por paralelo y año de escolaridad optarán por esta modalidad. Cada paralelo se dividirá en dos grupos, los cuales asistirán de manera alterna a la unidad educativa, de acuerdo con el horario establecido por el director de la UE, debiendo dar la comunidad educativa estricto cumplimiento a la aplicación de todas las medidas de bioseguridad de acuerdo con el protocolo establecido. Modalidad a distancia. los procesos de aprendizaje se desarrollan con el apoyo de las tecnologías de la información, medios de comunicación masiva, materiales impresos, en formato digital y otros. Esta modalidad no requiere la presencia física de los y las estudiantes. Ante el rebrote inminente de la propagación del COVID - 19, se aplicará la modalidad a distancia con el apoyo de recursos pedagógicos, material impreso, digital, medios tecnológicos (plataformas virtuales) o medios de comunicación masiva, radio, televisión, de acuerdo con las características del contexto.",
        aforosFiltrosSanitarios: "La modalidad a distancia a distancia se implementa en lugares donde los niveles de contagio son críticos, por ejemplo en las grandes ciudades. La modalidad presencial  se realiza con distanciamiento dentro de las aulas, uso permanente de cubrebocas (barbijo) y sanitizador de alcohol rebajado con agua o alcohol en gel para las manos. Además del barbijo y gell, muchos niños asisten con máscaras de placas transparentes. <br><br> Se estableció el documento de Consideraciones clave para el retorno seguro a clases, en el cual se establecen las emdidas básicas sanitarias  aseguir, como: Con relación al número de días a la semana que asistirán las alumnas y alumnos a la unidad educativa y los horarios de ingreso y salida, es necesario considerar la capacidad de la infraestructura, la disponibilidad del equipo educativo posibilidad de transporte, alimentación entre otros factores específicos de la comunidad o contexto educativo. Se deberán desinfectar todos los elementos personales como las partes expuestas del cuerpo antes de ingresar al hogar. Utilizar en lo posible pañuelos descartables, trapos, bolsas u otro similar para no tener contacto con puertas, timbres. Es importante que, al volver a casa, se intente no tocar nada hasta higienizarse.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "BR",
        title: "Brasil",
        balloonText: "Brasil",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Julio de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "Marco de acción y recomendaciones para la reapertura de escuelas. UNICEF-Brasil",
        actividadesPresenciales: "Restricciones para recibir hasta un 35 % de sus alumnos, Las clases se han dividido en grupos, los cuales se irán rotando semanalmente para respetar el aforo limitado, se compaginará con el sistema de educación telemática. Desarrollar calendarios académicos alternativas, basadas en diferentes escenarios salud pública y teniendo en cuenta las modalidades que se utilizarán para la educación a distancia. Empoderar a los profesores para que se enfrenten aprendizaje de las necesidades de recuperación y salud mental y atención psicosocial (SMAPS) de estudiantes. Esfuerzos para la formación debería mejorar explícitamente la capacidad de los profesores para cumplir necesidades básicas socioemocionales y de salud alfabetización / aritmética de los estudiantes, principalmente en escuelas con una alta proporción estudiantes en riesgo. Los maestros deben estar capacitados para identificar cambios de comportamiento y trastornos cognitivos relacionados con la edad, así como para proporcionar un apoyo de aprendizaje adecuado diferentes grupos de edad. Considere prescindir de menos exámenes importantes, como los que se utilizan para la toma de decisiones aprobación para concentrar recursos asegurando que los exámenes esenciales (como los que se utilizan para obtener un título en la educación secundaria superior o para el ingreso a la universidad) se realizan en forma válida, confiable y equitativa, tomando teniendo en cuenta la distancia física y otros requisitos sanitarios. Solo el 56% de las capitales y el 49% de los estados tenían planes estructurados. En los demás, los protocolos de las redes estatales y de las redes municipales de las capitales estatales no fueron divulgados en el formato de un documento único, estructurado y transparente. Como resultado, la comunidad escolar no tenía el conocimiento y la seguridad. Por ello, argumentan que la educación a distancia, política fundamental para el funcionamiento de modelos híbridos, necesita una mayor preocupación de todos los ámbitos de la administración pública, especialmente en lo que respecta a la expansión del acceso a internet. Y que los protocolos traigan más medidas para evitar la interacción entre clases y especifiquen pautas para que diferentes clases no se mezclen en actividades colectivas. En este sentido, crear burbujas sería la medida más eficaz. Para el movimiento Familias por la Vida, el protocolo de la red municipal de São Paulo está desactualizado e insuficiente frente a lo que se conoce hoy sobre la transmisión del coronavirus. Para el colectivo, las máscaras de tela, el alcohol en gel y la distancia en un aula cerrada son insuficientes.",
        aforosFiltrosSanitarios: "Por normas de los ministerios de Salud y Educación es obligatorio para los padres de familia llevar a sus hijos con mascarilla, sin importar el nivel educativo al que asistan. En la escuela los maestros son los encargados de que los niños cumplan todas las normas de salubridad para evitar contagios de la covid-19. Los niños de kínder  son inducidos para guardar la distancia física entre compañeros, así como a mantener puesta la mascarilla todo el tiempo. Las escuelas privadas, que concentran el 19% de los estudiantes primarios y secundarios de Brasil, también están retomando sus actividades alternando clases presenciales opcionales y aulas remotas. En Río, sin embargo, apenas 38 centros de la red municipal fueron autorizados a recibir alumnos, por ser los únicos con las infraestructuras de higiene y espacio al día.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "BT",
        "title": " ",
        "balloonText": "Bután",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BW",
        "title": " ",
        "balloonText": "Botswana",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BY",
        "title": " ",
        "balloonText": "Bielorrusia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "BZ",
        "title": "Belice",
        "balloonText": "Belice",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        "color": "rgba(200, 200, 200, 1)"
    },
    {
        id: "CA",
        title: "Canadá",
        balloonText: "Canadá",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "7 de Septiembre 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Se están planificando la reanudación de las actividades en los campus y una combinación de cursos presenciales, híbridos y en línea. Dependiendo de una variedad de factores para decidir qué métodos se usarían para qué cursos, incluido el tamaño de las clases, la población estudiantil, las instalaciones y si el curso se basa en conferencias o laboratorios.",
        aforosFiltrosSanitarios: "El ministerio está animando a las escuelas a utilizar pruebas rápidas de antígenos para la detección de rutina de personas asintomáticas, así como la vigilancia de las aguas residuales para detectar niveles de COVID-19. <br><br>Se está planificando que se ofrezcan muchas clases pequeñas, laboratorios y tutoriales en persona, con protocolos de seguridad adecuados.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "CD",
        "title": " ",
        "balloonText": "República Democrática del Congo",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "CF",
        "title": " ",
        "balloonText": "República Centroafricana",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "CG",
        "title": " ",
        "balloonText": "República del Congo",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "CH",
        title: "Suiza",
        balloonText: "Suiza",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "CI",
        "title": " ",
        "balloonText": "Costa de Marfil",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "CL",
        title: "Chile",
        balloonText: "Chile",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "10 de julio 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "check",
        nombreEstrategia: "Sigamos aprendiendo / Paso a paso abramos las escuelas / Chile recupera y aprende / Escuelas arriba",
        actividadesPresenciales: "De acuerdo a lo exhibido en el plan, solo se podrá optar a este regreso si es que así lo consideran los sostenedores, en concordancia con lo dispuesto por las autoridades sanitarias, de educación y los alcaldes de cada comuna. La Agencia de Calidad de la Educación pondrá a disposición de las comunidades educativas, por medio de su web, un diagnóstico integral. Las actividades presenciales se enfocarán en tres ejes: recuperación y nivelación de aprendizajes, bienestar socioemocional, y retención y reinserción escolar. La estrategia preparando el regreso contempla la incorporación graual de los alumnos a sus actividades escolares de la forma más normal posible y poniéndo énfasis en la toma de alimentos para prevenir los contagios de covid, Dicha estrategia contempla 5 pilares fundamentales: seguridad y proytección, contenión socioemocional, flexibilidad y gradualidad, centralidad del proceso pedagógico, equidad. A partir de julio del 2020, se puso en marcha la estrategia Paso a paso que organiza la actividad escolar de la siguiente manera: Como sea, desde ahora la actividad educativa quedará organizada de la siguiente manera:  <br><br>  CUARENTENA: <br> Asistencia: voluntaria / Apertura: de lunes a viernes con autorización del Mineduc (Sin necesidad de autorización si el establecimiento estaba abierto en Transición (Fase 2) y la comuna retrocede) <br><br>  TRANSICIÓN: <br> Asistencia: voluntaria / Apertura: permitida de lunes a viernes <br><br>  PREPARACIÓN: <br> Asistencia: voluntaria / Apertura: permitida de lunes a viernes <br><br> APERTURA: <br> Asistencia: Voluntaria / Apertura: permitida de lunes a viernes",
        aforosFiltrosSanitarios: "El Plan Paso a Paso es una estrategia gradual para enfrentar la pandemia según la situación sanitaria de cada zona en particular. Se trata de 4 escenarios o pasos graduales, que van desde la Cuarentena hasta la Apertura Avanzada, con restricciones y obligaciones específicas. El avance o retroceso de un paso particular a otro está sujeta a indicadores epidemiológicos, red asistencial y trazabilidad. 1) cuarentena 2) transición 3) preparación 4) apertura inicial La estrategia Pao a pasom contempla el protocolo ''Preparando el regreso'' que contiene tiene una serie de medidas para el regreso presencial donde se contemplan las medidas sanitarias que las escuelas deben implemnetar.para el retorno . Dicho protocolo debe realizarse ada 24 horas en los centros educativos. Se les da a las escuelas  un kit de limpieza básico con mascarillas, alcohol en gel, jabón, escudo facial, termómetros y sets de limpieza para las instalaciones.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "CM",
        "title": " ",
        "balloonText": "Camerún",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "CN",
        "title": " ",
        "balloonText": "China",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "CO",
        "title": "Colombia",
        "balloonText": "Colombia",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Enero de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "Plan de alternancia",
        actividadesPresenciales: "Se autorizó que entre la tercera semana de enero y la primera de febrero realizará el regreso progresivo y gradual a las aulas, sin dejar de lado las clases virtuales y la educación en casa. No hay una fecha de regreso a clases determinada y cada región establece su propio calendario académico. Se dictamina como requisito que las regiones entreguen al Ministerio de Educación el Plan de Alternancia, que deberá ser aprobado. Posterior a ello, cada escuela pública y particular tendrá que adoptar las medidas establecidas, de acuerdo a sus capacidades de aforo y condiciones educativas.",
        aforosFiltrosSanitarios: "Se realizaron los LINEAMIENTOS PARA LA PRESTACIÓN DEL SERVICIO DE EDUCACIÓN EN CASA Y EN PRESENCIALIDAD BAJO EL ESQUEMA DE ALTERNANCIA Y LA IMPLEMENTACIÓN DE PRÁCTICAS DE BIOSEGURIDAD EN LA COMUNIDAD EDUCATIVA, en los cuales se mencionan los aspectos que deben cubrirse respecto a las medidas sanitarias y la gestión de los aprendizajes por parte de los territorios, autoridades locales y las propias escuelas",
        "color": "rgba(0, 24, 75, 1)"
    },
    {
        id: "CR",
        title: "Costa Rica",
        balloonText: "Costa Rica",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Julio 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "Yo me cuido, yo te cuido, la comunidad se cuida",
        actividadesPresenciales: "Para poder abordar esa nueva realidad, se fortalece el modelo pedagógico, que tiene como meta los aprendizajes esperados y las habilidades, a partir de dimensiones como: <br> • Maneras de pensar, cuyo objetivo es el desarrollo cognitivo de cada persona, a través de diferentes habilidades y competencias. <br> • Formas de vivir en el mundo, con el propósito de asumir las interrelaciones dentro de la ciudadanía planetaria con arraigo pluricultural. <br> • Formas de relacionarse con otras personas, que son habilidades y competencias requeridas, a fin de desarrollar sinergias con otras personas mediante la comunicación y la colaboración <br> • Herramientas para integrarse al mundo, apropiación de las tecnologías digitales, así como la responsabilidad que conlleva el manejo de los mensajes y el uso de la información <br> <br> Para la palicación de la estrategia se contemplan algunas medidas como las siguientes: Para centros educativos públicos, privados y colegios técnicos que cuenten con la estructura adecuada, la duración de cada jornada en la modalidad presencial será de 8 horas máximo al día. Si no cuentan con la estructura física suficiente, la jornada máxima debe ser de 5 horas en la mañana y 5 horas en la tarde. <br> <br> El orden de ingreso será de acuerdo con los siguientes niveles: <br> Preescolar: Transición <br> Primaria: Quinto y sexto año <br> Secundaria: Décimo y undécimo año <br> Educación Técnica: Undécimo y duodécimo año. <br> En las escuelas unidocentes se aceptará la totalidad del estudiantado en el curso, siempre que sea posible mantener el distanciamiento físico de 1,8 metros.",
        aforosFiltrosSanitarios: "Las actividades que se realizan en el marco de la estrategia para generar los productos en el corto plazo, los efectos en el mediano plazo y los impactos anteriormente mencionados en el largo plazo, son:  Conformar mesas de trabajo para análisis de las premisas.  Realizar un diagnóstico sobre las condiciones de infraestructura de los centros educativos.  Establecer una estrategia de participación y comunicación de la Estrategia “Regresar” para todos los actores involucrados.  Identificar la población con mayor nivel de vulnerabilidad a partir del análisis del índice de vulnerabilidad.  Elaborar  un  plan  de  apertura  para  cada  centro  educativo  que  garantice  el  regreso  a  la presencialidad de la población educativa de todas las ofertas y modalidades educativas.  Elaborar los protocolos específicos sanitarios para garantizar un riesgo mínimo de contagio del Covid-19 durante el regreso a la presencialidad de la población educativa de todas las ofertas y modalidades educativas, así como actualizar estos protocolos de conformidad con la evolución de la pandemia.  Difusión y asesoramiento a estudiantes y personal de los centros educativos y las DRE para el uso de protocolos.  Verificar la implementación de los protocolos específicos sanitarios  Conformar las comisiones institucionales de riesgo.  Habilitar  de  plataforma Microsoft  Teams  para  el  uso de  docentes  y  personas estudiantes promoviendo su utilización.  Generación de  acciones  para el fortalecimiento de  las condiciones  y recursos con los que cuentan los centros educativos, que aseguren un retorno seguro a la presencialidad.  Diseñar y divulgar las orientaciones para la mediación pedagógica en educación combinada.  Diseñar y divulgar las orientaciones para la evolución del aprendizaje en el aula y estandarizada (FARO, Educación Abierta).  Elaborar los instrumentos de apoyo Educativo y tecnológico para el aprendizaje.  Diseñar y divulgar las orientaciones para la participación estudiantil.  Establecer el rol de los actores en el servicio presencial y a distancia.  Definir los lineamientos técnicos para el proceso de evaluación.  Diseñar y divulgar los instrumentos de Evaluación de los aprendizajes esperados.  Establecer  los  instrumentos  de  seguimiento  para  la  implementación  de  la  Estrategia “Regresar”",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "CU", 
        title: "Cuba",
        balloonText: "Cuba",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "6 de septiembre 2021",
        tipoModelo: "No aplica",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "close",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Cuando algunas provincias regresaron en septiembre-noviembres, hubo en las escuelas presencia de médicos y enfermeras, horarios flexibles, horarios escalonados en universidades.",
        aforosFiltrosSanitarios: "Cuando se dice que regresaron,septiembre-noviembre además de las medidas básicas:horarios de receso y almuerzo realizados de forma escalonada, no entrada de familiares ni extraños, prohibición de actos grupales, identificación de contagios en estudantes.",
        color: "rgba(255, 165, 0, 1)"
    },
    {
        id: "CZ",
        title: "República Checa",
        balloonText: "República Checa",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "DK",
        title: "Dinamarca",
        balloonText: "Dinamarca",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "DO",
        title: "República Dominicana",
        balloonText: "República Dominicana",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "DZ",
        "title": " ",
        "balloonText": "Argelia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "EC",
        title: "Ecuador",
        balloonText: "Ecuador",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "EE",
        "title": " ",
        "balloonText": "Estonia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "EG",
        "title": " ",
        "balloonText": "Egipto",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "EH",
        "title": " ",
        "balloonText": "Sahara Occidental",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "ER",
        "title": " ",
        "balloonText": "Eritrea",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "ES",
        title: "España",
        balloonText: "España",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Enero 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Comunidad Autónoma de Madrid. Las escuelas han reabierto y cerrado ya varias ocasiones, el cierre de las mismas esta condicionado al desarrollo epidemiológico local. Los niños de 0 a 3 años asistirán todos los alumnos de manera presencial. Para el resto de educación básica se reduce el número de alumnos a grupos estables de máximo 20 personas. Modelo híbrido semipresencial. Modelos de rotación (burbujas de trabajo). <br><br> Clases presenciales: En el primer ciclo de Educación Infantil (0-3 años) acudirán todos los alumnos de manera presencial. Los padres podrán acompañar a sus hijos con mascarilla y haciendo uso de gel hidroalcohólico. Los educadores deberán permanecer con un grupo estable de convivencia, mientras que los de apoyo deberán extremar al máximo las medidas de prevención sanitaria. Segundo ciclo de Educación Infantil y Educación Primaria En el segundo ciclo de Educación Infantil (3-6 años) y Educación Primaria habrá educación presencial pero se reducirá el número de alumnos de los grupos estables de convivencia a un máximo de 20 o se respetará la distancia de seguridad de 1,5 metros. <br><br> Se reorganizarán los espacios en los centros educativos con el fin de que haya más aulas y, en caso de que fuese necesario, se habilitarán espacios alternativos en otros edificios de titularidad autonómica o local o mediante prefabricados. Si no es posible todo lo anterior, se instalarán mamparas en las aulas. <br> Educación especial: Los padres decidirán, teniendo en cuenta el criterio médico, la asistencia de sus hijos a los centros. La educación será presencial con la creación de grupos de convivencia de un máximo de 8 alumnos. <br><br> Las pruebas y controles sanitarios se reforzarán de una manera muy notable en este tipo de educación <br><br> Clases semipresenciales: <br> Para los alumnos de 3º, 4º de la ESO, Bachillerato, FP y Educación para Adultos, la educación será semipresencial, pero se deberá garantizar la asistencia al centro de los alumnos entre un tercio y la mitad del horario semanal: los estudiantes podrán acudir días alternos a clase o establecer franjas horarias de cuatro horas cada día.",
        aforosFiltrosSanitarios: "Se crea un coodinador COVID-19 por centro escolar. Se realizan pruebas PCR a niños y personal de educación al inicio del curso escolar. Se toma la temperatura a la entrada. Mascarilla obligatoria para los alumnos a partir de 6 años, cuando la pandemia evolucione de una manera favorable el límite de edad se elevará a 11 años. Se suministrará mascarillas y gel entre alumnos y profesores. <br> <br> En la Comunidad de Madrid se establece: <br> Creación del coordinador COVID-19 por centro. Se les suministrará EPIS para tratar con casos sospechosos y posibles <br> <br> Pruebas de test de anticuerpos a todos los docentes y personal de apoyo de la educación pública y concertada al inicio del curso escolar <br> <br> Estudio serológico, denominado SeroCOL, con el que se realizarán 42.500 test a 13.000 estudiantes y 1.500 profesores en tres momentos temporales diferentes (septiembre y diciembre de 2020 y marzo de 2021) <br> <br> Pruebas PCR a los alumnos y profesores de los centros de Educación Especial, tanto al inicio del curso como a lo largo de éste, de forma periódica <br> <br> Los centros educativos dispondrán de termómetros rápidos para que puedan tomar la temperatura de sus alumnos <br> <br> Mascarilla obligatoria en el centro educativo para los alumnos a partir de 6 años en el centro educativo, incluida en las clases. Cuando la pandemia evolucione de una manera favorable, este límite de edad se elevará a los mayores de 11 años <br> <br> Se suministrarán 650.000 litros de gel hidroalcohólico y 9.500.000 mascarillas entre alumnos y profesores <br> <br> Se recomienda que las personas mayores no acompañen a los alumnos a los centros",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "ET",
        "title": " ",
        "balloonText": "Etiopía",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "FK",
        "title": " ",
        "balloonText": "Islas Malvinas",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "FI",
        title: "Finlandia",
        balloonText: "Finlandia",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Mayo 2020",
        tipoModelo: "Normal",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "close",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Tanto los proveedores de formación como el personal docente y mentor deben asegurarse de que los estudiantes sean contactados activa y regularmente. La interacción entre compañeros entre los estudiantes también promueve el aprendizaje, y los estudios se pueden diseñar para que sean lo más interactivos posible. El personal docente y de supervisión debe prestar atención a la carga total de estudios para que los estudiantes tengan tiempo de recuperarse de sus estudios. ",
        aforosFiltrosSanitarios: "Las autoridades municipales, competentes en materia educativa, podrán ordenar el cierre de algunas escuelas si aprecian un aumento notable del número de contagios. Asimismo, el Gobierno ha impuesto una serie de restricciones en los centros educativos para evitar que la situación vuelva a empeorar de forma significativa. Entre otras medidas, los alumnos serán divididos por grupos separados unos de otros, se intensificarán las medidas de higiene y se escalonarán las clases, los horarios de comidas y las entradas y salidas de los colegios.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "FR",
        title: "Francia",
        balloonText: "Francia",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Abril de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "check",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Francia continental a partir del lunes 5 de abril de 2021: semana del 5 de abril: aprendizaje a distancia y continuidad educativa para escuelas, colegios y escuelas secundarias del 12 al 25 de abril: dos semanas de vacaciones escolares para todas las zonas 26 de abril: regreso a clases para estudiantes de primaria, jardín de infantes y primaria semana de aprendizaje a distancia para escuelas intermedias y secundarias 3 de mayo: regreso a clases para escuelas intermedias y secundarias, si es necesario con medidores adaptados. <br>Con el fin de permitir a los docentes asegurar la continuidad pedagógica, se han puesto a disposición en el sitio ''eduscol'' muchos recursos que tiene una treintena de páginas relacionadas con la continuidad pedagógica, tales como: consejos para docentes y selecciones de recursos académicos para el primer grado y para la mayoría disciplinas secundarias, acceso a los servicios digitales del CNED, etc. <br><br>Desde el inicio del curso escolar 2020, se dispone del marco normativo nacional y de las fichas con el objetivo de facilitar el establecimiento de la continuidad educativa. <br><br>La frecuencia de consulta de las páginas ''eduscol'' constituye en este sentido un indicador interesante de la necesaria modificación de las prácticas docentes para afrontar un nuevo contexto de salud y una experiencia de clase sin precedentes",
        aforosFiltrosSanitarios: "Distanciamiento de 2 metros entre grupos en la cafetería y el uso de mascarillas categoría 1 (quirúrgico) son requisito, dentro y fuera de cada establecimiento dentro y fuera de de cada establecimiento tanto para los estudiantes como para el personal. Solo a los alumnos de preescolar se les exime del uso de tapabocas. En cuanto al distanciamiento físico, se pide a la hora del almuerzo los alumnos de un mismo curso permanecen en grupo y no se mezclan con estudiantes de otros cursos. Se suma una ventilación de los espacios mucho más frecuente. En caso de que un estudiante de positivo a COVID para considerar como contactos estrechos a todos sus comañeros de curso. En ese caso la clase tendrá que cerrar y los alumnos permanecer aislados durante 7 días.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "GA",
        "title": " ",
        "balloonText": "Gabón",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "GB",
        title: "Reino Unido",
        balloonText: "Reino Unido",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Junio de 2021",
        tipoModelo: "Sin información",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "check",
        nombreEstrategia: "Back to School",
        actividadesPresenciales: "Enseñar un plan de estudios amplio y ambicioso en todas las materias. Cuando proceda, se debe priorizar el tiempo de enseñanza para abordar las lagunas más importantes en el conocimiento de los alumnos. Debe asegurarse de que la planificación del plan de estudios se base tanto en una evaluación de los puntos de partida de los alumnos como en las lagunas en sus conocimientos, y una comprensión de cuál es el contenido más crítico para la progresión. Para lograr esto, es posible que deba realizar modificaciones sustanciales en su plan de estudios y debe hacer un uso efectivo de la evaluación formativa regular evitando la introducción de sistemas de seguimiento innecesarios. Puede utilizar las flexibilidades existentes para crear tiempo para cubrir el contenido más importante en el que los alumnos aún no están seguros.",
        aforosFiltrosSanitarios: "Con algunas excepciones, el uso del cubrebocas ha sido obligatorio en todos los países europeos durante 2021. también incluían mantener las aulas ventiladas, además de intentar que haya distancia entre profesores, estudiantes y padres. El uso de un sistema híbrido ha sido una opción implementada por algunas regiones para ir gradualmente volviendo a una operación completamente presencial. En Reino Unido, el ministerio de Educación ha solicitado a los estudiantes de educación secundaria y universitaria que se realicen un test de COVID-19 antes de volver a clase el 7 de junio, cuando terminaron las vacaciones de mitad de año académico",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "GE",
        "title": " ",
        "balloonText": "Georgia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "GF",
        title: "Guyana Francesa",
        balloonText: "Guyana Francesa",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "GH",
        "title": " ",
        "balloonText": "Ghana",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "GL",
        "title": " ",
        "balloonText": "Groenlandia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "GM",
        "title": " ",
        "balloonText": "Gambia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "GN",
        "title": " ",
        "balloonText": "Guinea",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "GQ",
        "title": " ",
        "balloonText": "Guinea Ecuatorial",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "GR",
        title: "Grecia",
        balloonText: "Grecia",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "GT",
        title: "Guatemala",
        balloonText: "Guatemala",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Enero 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "Juntos por un regreso a clases seguro / Aprendo en casa y en clase",
        actividadesPresenciales: "Cuenten con protocolos de bioseguridad  y que en las aulas haya materiales de apoyo psicosocial y guías de aprendizaje. Concientización con la comunidad educativa por parte del docente, apoyo emocional a estudiantes, organización física de ambientes seguros y las divisiones en burbujas (cohortes). <br><br> Se debe considerar con base en el documento ''Plan de regreso a clases'' lo siguiente:<br> • Organizar la asistencia de los estudiantes por grados, niveles, días, horarios de ingreso y salida, de acuerdo con el contexto de la comunidad y el desarrollo del currículo.<br> • La Comisión de Evaluación puede realizar sus aportes al proceso para asegurar la vinculación con la evaluación de los aprendizajes. <br> • Complementar las horas necesarias para cumplir con la entrega educativa por medio de la modalidad híbrida o en casa. <br> • Alternar la enseñanza de las áreas, con grupos reducidos para garantizar el distanciamiento físico establecido y de acuerdo con el diagnóstico realizado.",
        aforosFiltrosSanitarios: "Mantener a las personas sintomáticas en casa, lavado de manos, distanciamiento físico y social, disponibilidad de agua, saneamiento, higiene y ventilación. El docente debe utilizar permanentemente y de forma correcta la mascarilla asegurándose de cubrir por completo la boca y nariz. <br><br> En Guatemala, se realizaron los siguientes protocolos para el retorno a clases: Protocolo Institucional del Ministerio de Educación protocolos para el regreso a clases dirigifdos a: Directores departamentales de educación, para supervisores de los centros educativos, para directores y docentes de los centros educativos, Protocolo para el regreso a los epacios de Aprendizaje, protocolo de apoyo emocional y resiliencia, Recomendaciones para el transporte escolar, Guía para medidas de prevención ante el COVID, Protocolo para el docente en caso de posible contagio",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "GW",
        "title": " ",
        "balloonText": "Guinea-Bissau",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "GY",
        title: "Guyana",
        balloonText: "Guyana",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "HN",
        title: "Honduras",
        balloonText: "Honduras",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "HR",
        "title": " ",
        "balloonText": "Croacia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "HT",
        title: "Haití",
        balloonText: "Haití",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "HU",
        title: "Hungría",
        balloonText: "Hungría",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "ID",
        "title": " ",
        "balloonText": "Indonesia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "IE",
        title: "Irlanda",
        balloonText: "Irlanda",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Febrero de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "The Path Ahead",
        actividadesPresenciales: "El 1 de febrero, el Departamento de Educación acordó reabrir las escuelas especiales con un 50% de capacidad el jueves 11 de febrero y las clases especiales en las escuelas ordinarias el lunes 22 de febrero. [82] [83] [84] El jueves 11 de febrero, hasta 4.000 niños con necesidades educativas adicionales regresaron a la educación presencial cuando las escuelas especiales de todo el país reabrieron sus puertas, según los planes acordados entre el Departamento de Educación y los sindicatos de maestros y SNA. . [85] [86] [87] <br><br> En marzo, seegún el nuevo plan revisado Living with COVID-19 del Gobierno de Irlanda llamado ''The Path Ahead'',  se inicio con clases en los niveles primario y postprimario, el Gobierno ha decidido un regreso gradual de los estudiantes a la educación en la escuela. Etapas: <br><br> El lunes 1 de marzo, los cuatro primeros grupos de clases del nivel primario - Infantes de primer y último año, primera y segunda clase - y los alumnos del Leaving Certificate de último año volverán a la oferta escolar. Esta fase también verá un regreso a la asistencia total para los niños en las escuelas especiales, así como para los niños en las clases preescolares de inicio temprano y las clases especiales de intervención temprana para los niños con autismo o discapacidad auditiva. <br><br> El lunes 15 de marzo es la fecha límite para el regreso a la oferta escolar del resto de los niños de la escuela primaria - estudiantes de tercer a sexto curso y quinto año del Leaving Certificate. Esta fecha se revisará durante el período posterior al 1 de marzo. <br><br> El lunes 12 de abril, después de las vacaciones de Semana Santa, es la fecha límite para el regreso a la educación escolar del resto de estudiantes de posprimaria, estudiantes de primero a cuarto año. <br><br> Departamento de Educación ha confirmado que las maestras embarazadas y las SNA, así como las que están en la categoría de Covid de muy alto riesgo, deben continuar trabajando desde casa durante el resto del año escolar.",
        aforosFiltrosSanitarios: "Filtros escolares, estretegias y acuerdos con los transportistas esolares, listas/pasos para incorporarse con padres de familia y alumnos (Hoja de ruta al regreso a la escuelas)",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "IN",
        "title": " ",
        "balloonText": "India",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "IQ",
        "title": " ",
        "balloonText": "Irak",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "IR",
        "title": " ",
        "balloonText": "Irán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "IS",
        title: "Islandia",
        balloonText: "Islandia",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "IT",
        title: "Italia",
        balloonText: "Italia",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Marzo 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Decreto del Gobierno Italiano",
        actividadesPresenciales: "Estaban incorporados, sin embargo el 06 de marzo se cerraron las escuelas por altas tasas de contagios. Principalmente en las regiones del sur, Basilicata y Molise, son actualmente zonas rojas. <br><br>  De acuerdo con el Comunicado de prensa del Consejo de Ministros n. 10, del 7 al 30 de abril de 2021 la realización en presencia de los servicios educativos para la infancia y el jardín de infancia, así como la actividad didáctica del primer ciclo de educación y el primer año de Bachillerato. Para los grados posteriores de educación, las actividades se confirman en presencia del 50% al 75% de la población estudiantil en la zona naranja mientras que en la zona roja las actividades relacionadas se realizan a distancia, garantizando en todo caso la posibilidad de Realización de actividades presenciales para los alumnos con discapacidad y necesidades educativas especiales. <br><br> Ministerio de Educación italiano aún no ha anunciado ninguna actualización de las reglas, el panel asesor de expertos científicos del gobierno, el CTS, dijo que “las medidas que se aplicarán para el comienzo del año escolar 2021-2022 deben ser las mismas que las previstas al comienzo del año escolar anterior",
        aforosFiltrosSanitarios: "En regiones como Lombardía el regreso a clases presenciales se realizó con un aforo del 50% de los alumnos, escalonados en dos tandas: un 35% entró a las 8:00 am, y el restante 15% entró a las 9:30am, esto para evitar aglomeraciones. Sin embargo, el gobierno italiano decretó la habilitación para el regreso a clases en todo el país con presencia de entre el 50% y el 75% de la capacidad, siguiendo medidas de limpieza e higiene, dentro de las cuales se resalta el uso de mascarilla obligatorio, mantener medidas de distanciamiento social y la limpieza de los salones y el material de las escuelas. <br><br> Esto significaría máscaras para todos los mayores de seis años, pupitres individuales y asientos a distancia, horarios de entrada y salida escalonados y reglas de cuarentena para las clases con casos positivos, así como la posibilidad de que algunas clases se sigan impartiendo en línea, dependiendo de la situación de salud en cada área local y las reglas previstas en el sistema escalonado de restricciones de Italia. <br><br> Italia actualmente permite que todas las autoridades sanitarias locales ofrezcan vacunas a todas las personas mayores de 12 años.",
        color: "rgba(255, 165, 0, 1)",
    },
    {
        "id": "JO",
        "title": " ",
        "balloonText": "Jordania",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "JM",
        "title": "Jamaica",
        "balloonText": "Jamaica",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        "color": "rgba(200, 200, 200, 1)"
    },
    {
        "id": "BS",
        "title": "Bahamas",
        "balloonText": "Bahamas",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        "color": "rgba(200, 200, 200, 1)"
    },
    {
        id: "JP",
        title: "Japón",
        balloonText: "Japón",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Agosto de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "La educación en Japón más allá de la crisis del covid-19. No dejar a nadie atrás",
        actividadesPresenciales: "El cierra Preferencia a conocimientos fundamentales, se reduce la carga docente, se pierden actividades físicas, se asignan maestros e instructores adicionales. Se contratan más docentes (instructores y asistentes de maestros se contratan docentes retirados y estudianres de grados superiores por tiempo parcial).",
        aforosFiltrosSanitarios: "Se toma la temperatura, se asigan fondos a cada escuela para que compre insumos (termómetro, desinfectantes, teléfonos celulares, etc.)",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "KE",
        "title": " ",
        "balloonText": "Kenya",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "KG",
        "title": " ",
        "balloonText": "Kirguistán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "KH",
        "title": " ",
        "balloonText": "Camboya",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "KP",
        "title": " ",
        "balloonText": "Corea del Norte",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "KR",
        title: "Corea del Sur",
        balloonText: "Corea del Sur",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Mayo de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "k12",
        actividadesPresenciales: "El protocolo obligaba a que, una vez activado por el Ministerio de Salud el nivel 2 de restricciones en función del volumen regional de contagios, solo un tercio (en el caso de preescolar, primaria y secundaria) y dos tercios (para bachillerato) del total de alumnos en cada aula pudieran asistir a clases al mismo tiempo. <br>El tercio o dos tercios restantes debían asistir online a las clases, con base en un sistema rotatorio para garantizar que todos los alumnos tuvieran la misma proporción de horas lectivas presenciales y a distancia. <br>Independientemente del nivel de transmisión comunitaria, es importante utilizar y multiplexar estrategias de prevención en las escuelas. Aquí hay cinco estrategias de prevención clave para ayudar a garantizar una educación cara a cara segura y ayudar a prevenir la propagación de COVID-19 en las escuelas: <br>Todos usan la máscara correctamente distanciamiento físico <br>Lavado de manos y etiqueta respiratoria. <br>Mantener las instalaciones limpias y sanitarias. <br>Rastreo de contactos además de cuarentena y cuarentena preventiva <br><br> Las escuelas que ofrecen educación presencial deben priorizar dos estrategias de prevención: <ol> <li>Asegúrese de que todos usen / usen una máscara correctamente</li> <li>Maximizar el distanciamiento físico</li> <li>Todas las estrategias de prevención brindan algún nivel de protección, y el nivel más alto de protección se puede lograr aplicando múltiples estrategias al mismo tiempo. </li> <li>Las escuelas deben adoptar estrategias de prevención en un enfoque multiplexado que sea lo más práctico posible.</li></ol>",
        aforosFiltrosSanitarios: "La estrategia recomendada por el gobierno surcoreano consiste en un ingreso de los estudiantes ordenado, por turnos y que pasen por un detector térmico. Durante el día el control de la temperatura se realizaba varias veces al igual que el lavado de manos. Además, los escritorios fueron separados por unas láminas y el uso de mascarillas es permanentemente.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "PR",
        title: "Puerto Rico",
        balloonText: "Puerto Rico",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "XK",
        "title": " ",
        "balloonText": "Kosovo",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "KZ",
        "title": " ",
        "balloonText": "Kazajstán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "LA",
        "title": " ",
        "balloonText": "República Democrática Popular Lao",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "IL",
        title: "Israel",
        balloonText: "Israel",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Febrero 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "check",
        nombreEstrategia: "Plan de Sanidad",
        actividadesPresenciales: "Se inició con alumnos de preescolar y de los primeros cuatro cursos de primaria. 20% del alumnado, el 80% restante (1,9 millones de estudiantes) seguirá con clases virtuales, y su vuelta se hará en varias fases para evitar un nuevo pico de infecciones. Primera fase, preescolar y hasta los 10 años, en las llamadas zonas verdes, con bajo índice de morbilidad, o en las que más de un 70% de la población por encima de los 50 años ha sido vacunada. La segunda fase, a partir del 23 de febrero, contempla la vuelta a las aulas a partir de los 10 a los 18 años en ciudades con bajo índice de contagios o con más del 70% de vacunación. Desde el 9 de marzo, en una tercera etapa, los cursos no incorporados podrían volver a las aulas hasta los 18 años. Con respecto a las universidades, la vacunación se extenderá hasta el nivel superior para completar la reapertura de todo el sistema educativo. Los estudiantes con pase verde podrán asistir a clases presenciales en las facultades; los demás deberán seguir el curso académico en clases a distancia. Porcentaje de población vacunada con una de las dosis: un 63,44%., desde mao ya no es obligatorio el uso de cubrebocas. Israel fue de los primeros países del mundo en quitar totalmente la mascarilla, una de las principales medidas con las que evitar los contagios. Lo hizo con tasas de incidencia muy bajas y tras la inmunización de gran parte de su población. niños de entre 12 y 15 años habían recibido su primera dosis de la vacuna,. El resurgimiento del coronavirus en Israel se atribuye en gran parte a la propagación del tipo delta, que se detectó por primera vez en la India y se cree que es dos veces más contagioso que la cepa COVID original. Ministerio de Salud recomiende a los niños que comiencen el próximo año escolar (21-22) estudiando en “cápsulas” socialmente distanciadas el inicio del año escolar programado para fines de agosto, pero que para escuelas ultraortodoxas se adelanta al día 8 de ese mes.",
        aforosFiltrosSanitarios: "Es el segundo intento de reincoporación, la primera fue en agosto 2020. El Ministerio de Educación había dado instrucciones de seguridad: los cubrebocas debían ser usados por los estudiantes a partir de cuarto grado, las ventanas tenían que estar abiertas, debían lavarse las manos con frecuencia y los estudiantes tenían que mantener una distancia de dos metros siempre que fuera posible. Para la reincorporación a clases en el año 2021 se utilizará el modelo ''10-4'' desarrollado por los científicos Uri Alon y Ron Milo, y se basa en el período de latencia del virus, es decir, el lapso que transcurre entre que una persona se contagia y pasa a ser contagiosa para los demás. Ese tiempo se calcula en tres días y de ahí surge el modelo: 4 días en la escuela (de lunes a jueves) y 10 días de confinamiento, lo que da oportunidad para ingresar a un nuevo grupo de alumnos y se reduzca la posibilidad de segregación de la enfermedad. Para el ciclo 21-22 se prevee aumentar el número de salas para disminuir los estudiantes reunidos en un espacio y que en caso de brotes los menores vacunados pueden reanudar los estudios si dan negativo a un test rápido, mientras que los no inmunizados deben permanecer una semana en cuarentena. nfatizando en la importancia de que la mayor cantidad de niños desde los 12 años sean vacunados y aquellos que no cumplan podrían exigirles un examen negativo para poder retornar a clases este semestre, cuyo costo correrá por parte de los padres o tutores de los menores.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "LK",
        "title": " ",
        "balloonText": "Sri Lanka",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "LR",
        "title": " ",
        "balloonText": "Liberia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "LS",
        "title": " ",
        "balloonText": "Lesoto",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "LT",
        title: "Lituania",
        balloonText: "Lituania",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "LU",
        title: "Luxemburgo",
        balloonText: "Luxemburgo",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "TT",
        title: "Trinidad y Tobago",
        balloonText: "Trinidad y Tobago",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "LV",
        title: "Letonia",
        balloonText: "Letonia",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "LY",
        "title": " ",
        "balloonText": "Libia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MA",
        "title": " ",
        "balloonText": "Marruecos",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MD",
        "title": " ",
        "balloonText": "Moldavia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "ME",
        "title": " ",
        "balloonText": "Montenegro",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MG",
        "title": " ",
        "balloonText": "Madagascar",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MK",
        "title": " ",
        "balloonText": "Macedonia del Norte",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "ML",
        "title": " ",
        "balloonText": "Mali",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MM",
        "title": " ",
        "balloonText": "Myanmar",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MN",
        "title": " ",
        "balloonText": "Mongolia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MR",
        "title": " ",
        "balloonText": "Mauritania",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MW",
        "title": " ",
        "balloonText": "Malawi",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TF",
        "title": " ",
        "balloonText": "Tierras Australes y Antárticas Francesas",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "MX",
        title: "México",
        balloonText: "México",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Agosto de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Estrategia Nacional para el Regreso Seguro a Clases Presenciales en las Escuelas de Educación Básica",
        actividadesPresenciales: "La Secretaría de Educación Pública (SEP) reitera que el regreso a clases presenciales, en las entidades con semáforo epidemiológico en verde, será gradual y voluntario, por lo que las madres y padres de familia están en libertad de decidir si llevan o no a sus hijas e hijos a los planteles escolares. <br><br> Se identifican al menos tres niveles de comunicación y participación de los educandos en actividades convocadas por el personal docente: <ol> <li>Comunicación y participación sostenida: seguimiento de la programación de Aprende en Casa II por algún medio, comunicación continua entre el titular del grupo o asignatura y sus alumnas o alumnos, participación en sesiones y realización de las actividades didácticas indicadas.</li> <li>Comunicación intermitente y baja participación en actividades propuestas por el profesor o profesora: seguimiento ocasional de la programación de Aprende en Casa II, comunicación esporádica entre titular del grupo o asignatura y estudiantes, y entrega parcial de trabajos encargados.</li> <li>Comunicación prácticamente inexistente: sin posibilidad de dar seguimiento al proceso educativo de las alumnas y alumnos</li>",
        aforosFiltrosSanitarios: "Instalación de los Comités Participativos de Salud Escolar integrados por padres de familia y maestros. <br>Garantizar acceso a jabón y agua o gel en todas las escuelas, debido a que es la forma más efectiva para evitar contagios de Covid-19. <br>Cuidado de maestras y maestros. Quienes ya fueron vacunados. <br>Uso de cubrebocas o pañuelo obligatorio. <br>Sana distancia para las entradas y salidas de los alumnos, recreos escalonados, lugares fijos asignados y asistencia alternada a la escuela por apellido durante el curso remedial. <br>Maximizar el uso de espacios abiertos. <br>Suspensión de cualquier tipo de ceremonias o reuniones. <br>Detección temprana de un caso de COVID-19 <br>Apoyo social emocional para docentes y estudiantes.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "MY",
        "title": " ",
        "balloonText": "Malasia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "MZ",
        "title": " ",
        "balloonText": "Mozambique",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "NA",
        "title": " ",
        "balloonText": "Namibia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "NE",
        "title": " ",
        "balloonText": "Niger",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "NG",
        "title": " ",
        "balloonText": "Nigeria",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "NI",
        title: "Nicaragua",
        balloonText: "Nicaragua",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "NL",
        title: "Países Bajos",
        balloonText: "Países Bajos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Primaria 8 de feb; Secundaria y ''MBO'' parcialmente desde el 1 de marzo, Ed. Sup. Clases a distancia",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "close",
        reincorporacionGradual: "close",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las escuelas primarias volvieron en su totalidad a clases desde el 8 de febrero, aunque con medidas sanitarias preventivas. Los niños con resfriado se quedan en casa y se hacen la prueba de coronavirus; las horas de inicio y finalización de clases, así como los descansos son escalonados para evitar la concentración de personas.",
        aforosFiltrosSanitarios: "No es obligatorio mantener la distancia de 1.5 metros entre estudiantes, pero sí entre éstos y el personal escolar; se aconseja trabajar en clase y gimnasia con grupos fijos de hasta 5 alumnos por todo el curso escolar y en el recreo solo conviven los alumnos del mismo grupo. Los únicos empleados que no han vuelto a la actividad escolar son aquellos clasificados en riesgo, es decir, mayores de 70 años o con alguna enfermedad crónica. Tampoco han vuelto al trabajo aquellos que viven con alguien que encaja en el grupo de riesgo.Los únicos empleados que no han vuelto a la actividad escolar son aquellos clasificados en riesgo, es decir, mayores de 70 años o con alguna enfermedad crónica. Tampoco han vuelto al trabajo aquellos que viven con alguien que encaja en el grupo de riesgo.Los sistemas de ventilación son fundamentales para reducir la transmisión de infecciones respiratorias. El gobierno holandés destinó 340 millones de euros para ayudar a las escuelas a cumplir con los estándares.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "NO",
        title: "Noruega",
        balloonText: "Noruega",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Abril 2020",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Las escuelas deben trabajar con el servicio de salud escolar y de bienestar infantil para desarrollar estrategias para aquellos niños, niñas y jóvenes que requieran de acompañamientos singulares por cuestiones de salud, personales, sociales o emocionales.",
        aforosFiltrosSanitarios: "La Dirección de Educación y Formación se ha propuesto recopilar información relevante de la base de datos BASIL (jardines de infantes) y de la GSI (escuelas primarias) sobre la cantidad de estudiantes que regresaron a las escuelas, el impacto de las estrategias de la enseñanza a distancia, así como las consecuencias de la implementación de los protocolos sanitarios en el proceso de retorno, con el objeto de obtener insumos para la preparación del nuevo ciclo lectivo en agosto así como también para la planificación de diferentes escenarios de acción en caso de volver al nivel rojo según el modelo de semáforo.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "NP",
        "title": " ",
        "balloonText": "Nepal",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "NZ",
        title: "Nueva Zelanda",
        balloonText: "Nueva Zelanda",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "OM",
        "title": " ",
        "balloonText": "Omán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "PA",
        title: "Panamá",
        balloonText: "Panamá",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "PE",
        title: "Perú",
        balloonText: "Perú",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "15 de abril",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "close",
        nombreEstrategia: "Sigamos aprendiendo",
        actividadesPresenciales: "El retorno debe ser seguro, es decir, que garantice un conjunto de medidas sanitarias, epidemiológicas y protocolos de prevención de bioseguridad, y flexible, que facilite adaptarse a los cambios tomando en cuenta las consideraciones pedagógicas, socioemocionales, de gestión escolar y los tipos de servicio. Se evaluan a los estudiantes por medio de una evaluación diagnóstica, el portafolio del estudiante, la información registrada en el SIAGIE y la carpeta de recuperación y pueden suceder dos escenarios: el estudiante supera los niveles de logro para su grado entonces continúa con las acciones según las competencias seleccionadas en el marco de la emergencia sanitaria; si el estudiante requiere de un tiempo adicional para alcanzar el nivel esperado se iniciará el periodo de consolidación para el desarrollo de competencias seleccionadas, estos cursos remediales durarán hasta junio 2021.",
        aforosFiltrosSanitarios: "En el marco de lo dispuesto en la RM 121-2021-MINEDU, comunica (el Minedu) que a partir del 19 de abril las IIEE y programas educativos podrán brindar el servicio educativo con algún nivel de presencialidad. El retorno será seguro, flexible, gradual y voluntario. “El Ministerio de Educación, en coordinación con los gobiernos regionales y locales, desarrolla acciones de articulación intergubernamental e intersectorial para asegurar las mejores condiciones de salud y seguridad para todos los estudiantes, docentes y administrativos. Así, niñas, niños y adolescentes seguirán aprendiendo con el objetivo de continuar con sus trayectorias educativas y su formación como ciudadanos Se establecen como dedidas generales: distanciamiento social, lavado de manos, higiene respiratoria y etiquetado de estornudo, desinfección de calzado, control de temperatura y .Dichas medidas reflejadas en la resolución ministeial para el inicio de clases.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "PG",
        "title": " ",
        "balloonText": "Papúa Nueva Guinea",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "PH",
        "title": " ",
        "balloonText": "Filipinas",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "PL",
        title: "Polonia",
        balloonText: "Polonia",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "PK",
        "title": " ",
        "balloonText": "Pakistán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "PT",
        title: "Portugal",
        balloonText: "Portugal",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        id: "PY",
        title: "Paraguay",
        balloonText: "Paraguay",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Marzo de 2021",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "Retorno seguro a clases 2021",
        actividadesPresenciales: "Los padres através de una app deciden si sus hijos asisten de manera presencial o no. Para las clases presenciales se crean grupos que asistiran de manera intercalada. Cada grupo estará conformada por máximo 15 personas. Los días de clases presenciales serán por grupos. APP para control de los grupos, distanciamiento social en el aula, uso de cubre bocas obligatorio. El retorno seguro a las aulas, contempla dos fases diferenciadas: la primera, denominada fase preparatoria, establece los lineamientos a seguir a fin de crear las condiciones de infraestructura, logísticas y de organización de docentes y estudiantes que permitan un retorno seguro, gradual y ordenado al local educativo. La segunda fase, o de retorno efectivo, define los acuerdos y normas que permitirán que los grupos de estudiantes y docentes puedan desarrollar sus diferentes actividades de manera segura, desde el ingreso, durante la permanencia y a la salida del recinto educativo. Establecerá también y los procedimientos para una respuesta rápida ante eventos que requieran el aislamiento temporal de personas o la suspensión de actividades presenciales debido a casos positivos de COVID-19 entre los integrantes de la comunidad educativa.",
        aforosFiltrosSanitarios: "Se crea una APP para el control de los asistentes de cada grupos escolar. Distanciamiento social en el aula, uso de cubre bocas obligatorio, higiene de manos mediante uso de gel antibacterial antes del ingreso, antes y despues del receso, antes y despues de manipulación de objetos y de consumir alimentos, ventilación: puertas  y ventanas siempre abiertas aun con aire acondicionado. Zonas de circulación señalizadas en el piso, horarios escalonados de entreda, recreo y salida. En el protocolo establecido, se mencionan tres medidas que son obligatorias par el retorno: uso de mascarilla, lavado periodico de manos y distanciamiento social. Tambiéns e establecen las emdidas de organización de los grupos y la forma de organización de la escuela en torno a las medidas sanitarias.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        "id": "RO",
        "title": " ",
        "balloonText": "Rumania",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "RS",
        "title": " ",
        "balloonText": "Serbia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "RU",
        "title": " ",
        "balloonText": "Rusia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "RW",
        "title": " ",
        "balloonText": "Rwanda",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "SA",
        "title": " ",
        "balloonText": "Arabia Saudita",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "SD",
        "title": " ",
        "balloonText": "Sudan",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "SE",
        title: "Suecia",
        balloonText: "Suecia",
        regresoActividadesPresenciales: "Solamente cerró bachilleratos y universidades",
        fechaRetorno: "Septiembre de 2020",
        tipoModelo: "Híbrido",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "close",
        alumnosVacunados: "close",
        nombreEstrategia: "No disponible",
        actividadesPresenciales: "Los establecimientos de nivel inicial y primario nunca cerraron. Recae en una decisión familiar la continuidad de los estudios en la presencialidad o a distancia. En el caso de optar por el segundo –algo que se dio con mayor recurrencia-, cada escuela fue la responsable de diseñar e implementar la enseñanza a distancia.Los establecimientos secundarios (pertenecientes a la escuela no obligatoria) así como las universidades permanecieron cerrados por decisión del gobierno nacional. Para la escuela secundaria, el retorno se determinó a partir del 15 de junio de forma obligatoria y presencial, respetando las determinaciones de la Agencia de Salud Pública.",
        aforosFiltrosSanitarios: "Recomendaciones de la Agencia de Educación Nacional para el comienzo del ciclo lectivo 2020-2021 para escuelas de nivel inicial y primaria: modalidad presencial, obligatoriedad de inasistencia para quienes padezcan síntomas o se encuentren enfermos, prohibición de la entrada a quienes no sean personal escolar, establecer permiso para que estudiantes puedan cursar sus estudios en otros establecimientos ubicados en localidades con baja circulación del virus en caso necesario.",
        color: "rgba(0, 24, 75, 1)"
    },
    {
        id: "SI",
        title: "Eslovenia",
        balloonText: "Eslovenia",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "SJ",
        "title": " ",
        "balloonText": "Svalbard y Jan Mayen",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "SK",
        title: "Eslovaquia",
        balloonText: "Eslovaquia",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "SL",
        "title": " ",
        "balloonText": "Sierra Leona",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "SN",
        "title": " ",
        "balloonText": "Senegal",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "SO",
        "title": " ",
        "balloonText": "Somalia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "SR",
        title: "Suriname",
        balloonText: "Suriname",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "SS",
        "title": " ",
        "balloonText": "Sudán del Sur",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "SV",
        title: "El Salvador",
        balloonText: "El Salvador",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "SY",
        "title": " ",
        "balloonText": "Siria",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "SZ",
        "title": " ",
        "balloonText": "Swazilandia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "FJ",
        "title": " ",
        "balloonText": "Fiyi",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "LS",
        "title": " ",
        "balloonText": "Lesotho",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "NC",
        "title": " ",
        "balloonText": "Nueva Caledonia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "SB",
        "title": " ",
        "balloonText": "Islas Solomon",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TD",
        "title": " ",
        "balloonText": "Chad",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TG",
        "title": " ",
        "balloonText": "Togo",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TH",
        "title": " ",
        "balloonText": "Tailandia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TJ",
        "title": " ",
        "balloonText": "Tayikistán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TM",
        "title": " ",
        "balloonText": "Turkmenistán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TN",
        "title": " ",
        "balloonText": "Túnez",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "TR",
        title: "Turquía",
        balloonText: "Turquía",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "BN",
        "title": " ",
        "balloonText": "Brunei Darussalam",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "CY",
        "title": " ",
        "balloonText": "Cyprus",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "DJ",
        "title": " ",
        "balloonText": "Djibouti",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "KW",
        "title": " ",
        "balloonText": "Kuwait",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "LB",
        "title": " ",
        "balloonText": "Lebanon",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "PS",
        "title": " ",
        "balloonText": "Palestinian Territories",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "QA",
        "title": " ",
        "balloonText": "Qatar",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TL",
        "title": " ",
        "balloonText": "Timor-Leste",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "VU",
        "title": " ",
        "balloonText": "Vanuatu",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TW",
        "title": " ",
        "balloonText": "Taiwán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "TZ",
        "title": " ",
        "balloonText": "Tanzania",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "UA",
        "title": " ",
        "balloonText": "Ucrania",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "UG",
        "title": " ",
        "balloonText": "Uganda",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "US",
        title: "Estados Unidos",
        balloonText: "Estados Unidos",
        regresoActividadesPresenciales: "Si",
        fechaRetorno: "Septiembre 2021",
        tipoModelo: "Educación en persona, Híbrido y educación remota",
        reincorporacionVoluntaria: "check",
        reincorporacionGradual: "check",
        docentesVacunados: "check",
        alumnosVacunados: "check",
        nombreEstrategia: "Return to School Roadmap",
        actividadesPresenciales: "La Hoja de ruta incluye tres puntos claves prioritarios en las que se alienta a las escuelas, distritos y comunidades a centrarse para garantizar que todos los estudiantes estén preparados para el éxito en el año escolar 2021-2022. Estos incluyen: (1) priorizar la salud y seguridad de los estudiantes, el personal y los educadores, (2) construir comunidades escolares y apoyar la salud social, emocional y mental de los estudiantes, y (3) acelerar el rendimiento académico.",
        aforosFiltrosSanitarios: "El Departamento de Educación de los Estados Unidos, indica lo siguiente: <ol> <li> Trabajar con socios en todo el gobierno federal para brindar apoyo a las escuelas y distritos y responder preguntas sobre la ampliación del acceso a las vacunas para los estudiantes mayores de 12 años y la implementación de la guía escolar K-12 recientemente actualizada de los CDC.</li> <li>Celebrar reuniones con los padres y las organizaciones de padres para resaltar las formas en que las escuelas y los distritos se están preparando para mantener a los estudiantes seguros durante el aprendizaje en persona y subrayar la importancia de brindar apoyo social, emocional y de salud mental para los estudiantes, además de los apoyos académicos en nuestras escuelas.</li> <li>Lanzamiento de herramientas de implementación para que las escuelas, los educadores y los padres aborden las tres áreas prioritarias de salud y seguridad; bienestar del estudiante; y académicos, en áreas que van desde apoyar a las escuelas en sus esfuerzos por abordar el tiempo extracurricular y de instrucción perdido hasta proporcionar información sobre cómo se pueden usar los fondos del Plan de Rescate Americano para ampliar el acceso a apoyos de salud mental para los estudiantes y educadores de nuestra nación, y proporcionar apoyos académicos adicionales .</li> <li>Actualización de los volúmenes 1 y 2 de los manuales COVID-19 del Departamento de Educación para reflejar la guía CDC K-12 actualizada recientemente.</li> </ol>",
        color: "rgba(0, 24, 75, 1)",
    },
    {
        id: "UY",
        title: "Uruguay",
        balloonText: "Uruguay",
        regresoActividadesPresenciales: "",
        fechaRetorno: "",
        tipoModelo: "",
        reincorporacionVoluntaria: "",
        reincorporacionGradual: "",
        docentesVacunados: "",
        alumnosVacunados: "",
        nombreEstrategia: "",
        actividadesPresenciales: "",
        aforosFiltrosSanitarios: "",
        color: "rgba(200, 200, 200, 1)"
    },
    {
        "id": "UZ",
        "title": " ",
        "balloonText": "Uzbekistán",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        id: "VE", 
        title: "Venezuela",
        balloonText: "Venezuela",
        regresoActividadesPresenciales: "No",
        fechaRetorno: "Se planea sea en octubre 2021",
        tipoModelo: "No aplica",
        reincorporacionVoluntaria: "info",
        reincorporacionGradual: "info",
        docentesVacunados: "info",
        alumnosVacunados: "info",
        nombreEstrategia: "Plan Cada Familia Una Escuela y Plan Universidad en Casa",
        actividadesPresenciales: "No aplica",
        aforosFiltrosSanitarios: "No aplica",
        color: "rgba(255, 165, 0, 1)"
    },
    {
        "id": "VN",
        "title": " ",
        "balloonText": "Vietnam",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "YE",
        "title": " ",
        "balloonText": "Yemen",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "ZA",
        "title": " ",
        "balloonText": "Sudáfrica",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "ZM",
        "title": " ",
        "balloonText": "Zambia",
        "color": "rgba(255, 255, 255, 0.5)"
    },
    {
        "id": "ZW",
        "title": " ",
        "balloonText": "Zimbabwe",
        "color": "rgba(255, 255, 255, 0.5)"
    }
]

$(document).ready(function(){
    $('.modal').modal();

    console.log( DataCountries );
});

var chart = am4core.create("map", am4maps.MapChart);

// Global configuration
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
polygonSeries.data = DataCountries;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.stroke = am4core.color("rgba(108, 108, 108, 1)");
polygonTemplate.tooltipText = "{balloonText}";
polygonTemplate.propertyFields.fill = "color";

// Capturamos el evento "click" sobre un país
polygonTemplate.events.on("hit", function(ev) {
    var data = ev.target.dataItem.dataContext;
    var innerHTML = data.balloonText + " (" + data.id  + ")";
    console.log(innerHTML);

    for(var i=0; i<DataCountries.length; i++){
        var DataActualCountry;

        if( DataCountries[i].id === data.id )
            DataActualCountry = DataCountries[i];
    }

    console.log( data.color );
    if( data.color == "rgba(0, 24, 75, 1)" || data.color == "rgba(255, 165, 0, 1)" ){
        $('.country-name').text(DataActualCountry.balloonText);
        $('.fechaRetorno').html(DataActualCountry.fechaRetorno);
        $('.tipoModelo').text(DataActualCountry.tipoModelo);
        $('.nombreEstrategia').html("<br>"+DataActualCountry.nombreEstrategia+"<br><br>");
        $('.actividadesPresenciales').html("<br>"+DataActualCountry.actividadesPresenciales+"<br><br>");
        $('.aforosFiltrosSanitarios').html("<br>"+DataActualCountry.aforosFiltrosSanitarios+"<br><br>");
    
        $('.reincorporacionVoluntaria').html("<i class='small material-icons icon-color-"+DataActualCountry.reincorporacionVoluntaria+"'>"+DataActualCountry.reincorporacionVoluntaria+"</i>");
        $('.reincorporacionGradual   ').html("<i class='small material-icons icon-color-"+DataActualCountry.reincorporacionGradual+"'>"+DataActualCountry.reincorporacionGradual+"</i>");
        $('.docentesVacunados        ').html("<i class='small material-icons icon-color-"+DataActualCountry.docentesVacunados+"'>"+DataActualCountry.docentesVacunados+"</i>");
        $('.alumnosVacunados         ').html("<i class='small material-icons icon-color-"+DataActualCountry.alumnosVacunados+"'>"+DataActualCountry.alumnosVacunados+"</i>");
    
        $('#ShowCountryInformation').modal('open');
    }else if( data.color == "rgba(200, 200, 200, 1)" ){
        $('.country-name').text(DataActualCountry.balloonText);
        $('#CountryNoConsider').modal('open');
    }

});

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

var homeButton = new am4core.Button();
homeButton.events.on("hit", function() {
    chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 30;
homeButton.icon.path =
  "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);
chart.zoomStep = 2;
chart.zoomControl.slider.height = 100;



