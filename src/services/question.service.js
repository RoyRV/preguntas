const questions = {
  ES: [
    "	has estado stalkeando a alguien y le diste like a una foto antigua?	",
    "	has salido a la calle sin ropa interior?	",
    "	has usado ropa interior sucia ?	",
    "	te has llevado algo de algun hotel?	",
    "	te has ido sin pagar de algun lado?	",
    "	has estafado a alguien ?	",
    "	te has orinado de la risa literalmente?	",
    "	te has tirado un gas tan apestoso y has culpado a otra persona?	",
    "	te has sacado el moco de la nariz?	",
    "	que no puedes dejar de hacer antes de ir a dormir	",
    "	te ha gustado algun profesor en el colegio ?	",
    "	has bailado con alguien y te has emocionado mas de la cuenta?	",
    "	a quien te gustaria ver calat@?	",
    "	sientes miedo cuando la gnt ve fotos de tu celular?	",
    "	si un dia fueras del sexo opuesto que harias?	",
    "	alguna vez has abierto una botella de trago y lo acabaste el mismo dia?	",
    "	alguna vez has regalado algo que te regalaron ?	",
    "	cuando estas ensenando algo a alguien le has mentido xq no te acuerdas?	",
    "	has entrado al baño y despues de todo te has dado cuenta q no hay papel?	",
    "	alguna vez has besado a alguien del mismo sexo?	",
    "	te has comido algo vencido sabiendo que lo estaba?	",
    "	alguna vez te has agachado y se te ha roto el pantalon?	",
    "	te ha gustado alguien mayor?	",
    "	te gustan mas jovenes o mas viej@s?	",
    "	cual fue la peor excusa que usaron para terminarte?	",
    "	cual fue la peor excusa que usaste para terminar?	",
    "	has dado un numero falso a alguien?	",
    "	te han invitado a la casa de alguien y no te gusto la comida?	",
    "	has usado ropa interior con hueco?	",
    "	te has emborrachado y besado a alguien y luego te has arrepentido?	",
    "	has robado algo alguna vez?	",
    "	tienes un crush famoso?	",
    "	pecho o pierna?	",
    "	gaseosa o trago?	",
    "	te ha cagado un pajaro?	",
    "	has pegado chicle debajo de algo?	",
    "	has intentado pasar un billete falso?	",
    "	has estado viendo una escena hot y tus papas pasaron?	",
    "	te han ampayado viendo algo indebido en la compu?	",
    "	si fueras una princesa de disney cual te gustaria?	",
    "	te has cruzado con alguien que no querias saludar y lo esquivaste?	",
    "	cual ha sido tu mejor excusa para no ir a trabajar?	",
    "	metiste comida al cine?	",
    "	prefieres vivir como alguien de 63 o de 13 años?	",
    "	has hecho trampa en el colegio?	",
    "	has paseado a tu perro y no has recogido sus eces?	",
    "	has invitado a comer a alguien y no te alcanzo?	",
    "	has estornudado y se te ha salido un pedo?	",
    "	has dicho q has ido a estudiar y te has quedado en otro lado?	",
    "	le haces photoshop a tus redes?	",
    "	te has hecho pichi en la piscina?	",
    "	has tenido suenos eroticos?	",
    "	te has olvidado echarte desodorante y has apestado?	",
    "	has fingido hablar para que no se te acerquen?	",
    "	has visto porno?	",
    "	te  has querido reir cuando besabas a alguien?	",
    "	el momento vergonzoso de tu vida fue...?	",
    "	te has equivoocado el nombre de la persona con la que tas hablando?	",
    "	si fueses gay con quien te gustaria tener un romance?	",
    "	te han plantado?	",
    "	Has atrapado a tus papás en un momento calentón?	",
    "	Has estado en una cita y has querido que ya se acabe?	",
    "	Cómo fue tu peor beso?	",
    "	Cuáles eran tus chapas en el cole?	",
    "	Luego de una juerga has borrado cassette?	",
    "	Has usado la misma ropa interior dos días seguidos?	",
    "	Cuando te emborrachas eres...	",
    "	Te has robado algo de una tienda?	",
    "	Cuál sería tu cita ideal?	",
    "	Te has chapado a alguien con mal aliento?	",
    "	Qué es lo que te compras cuando te quieres dar el gusto?	",
    "	alguna vez has visto un fantasma?	",
    "	te has aburrido en plena sesion amatoria?	",
    "	luego de sacarte los zapatos, tuviste que ponertelas xq olian mal?	",
    "	que tanto dices 'hay que vernos' sabiendo que no se van a  ver?	",
    "	que te haria desistir de un saliente?	",
    "	que tipo de borracho eres?	",
    "	te orinas en la ducha?	",
    "	Cual seria tu super poder y porque?	",
    "	cual es el peor momento para que te pidan una foto?	",
    "	has salido con dos personas al mismo tiempo sin que sepan?	",
    "	has usado tu amistad para sacar ventaja de una situacion?	",
    "	alguna vez te han visto o has visto a alguien desnudo de casualidad?	",
    "	te ha visto alguien oliendote las axilas?	",
    "	cual es el piropo mas raro que te han dicho?	",
    "	cual es el piropo mas bonito que te han dicho?	",
    "	que te hacia tu mama cuando no terminabas la comida?	",
    "	si tu saliente tiene perejil en los dientes , le dices?	",
    "	si fueses invisible por un dia que harias?	",
    "	estando en una relacion , has querido estar soltero por un dia porque te gusto alguien mas?	",
    "	verano o invierno?	",
    "	que haces si quieres orinar en plena exposicion?	",
    "	te has colado en el cine?	",
    "	luces prendidas o apagadas?	",
    "	el peor viaje de mi vida fue...	",
    "	te ha gustado la pareja de tu amig@?	",
    "	se te ha salido la ropa y has quedado desnudo en la playa?	",
    "	de dia o de noche?	",
    "	rapido o lento?	",
    "	cuando fue la ultima vez que tuviste sexo?	",
    "	con bulla o en silencio?	",
    "	el lugar mas raro donde lo has hecho?	",
    "	arriba o abajo?	",
    "	que tenga mal aliento o que huela mal?	",
    "	cual fue tu mejor beso?	",
    "	tienes una mania vergonzosa?	",
    "	como choteas a alguien?	",
    "	si tu vida fuera una pelicula, como la titularias?	",
    "	cual es tu sabor favorito de helado?	",
    "	gileas o esperas q te gileen?	",
    "	has tenido ganas de renunciar x la gente con q trabajas?	",
    "	queriendo tener sexo con alguien , le has dicho no?	",
    "	cual es tu cancion favorita?	",
    "	si no ejercieras de tu carrera, que te gustaria hacer?	",
    "	acido o amargo?	",
    "	playa o campo?	",
    "	si te pudieras cambiar algo que seria?	",
    "	que es lo peor que te ha pedido hacer un ex?	",
    "	boca arriba o boca abajo?	",
    "	te has peleado por alguien ?	",
    "	cuando te invitan a salir a algun lugar , preguntas a donde?	",
    "	te gustan mas altos, mas bajos o de tu talla?	",
    "	que haces en tus ratos libres?	",
    "	Te gusta hacer masajes? o q te los hagan?	",
    "	Has hecho juego de roles?	",
    "	se te ha quedado comida en la dientes?	",
    "	con que animal te identificas?	",
    "	si pudieras bailar con alguien quen seria?	",
    "	matematica o lenguaje?	",
    "	un consejo para seducir?	",
    "	cual es tu posicion favorita?	",
    "	perro o gato?	",
    "	cual es tu lisura preferida?	",
    "	cual es tu placer culposo?	",
    "	orinas en la ducha?	",
    "	que es lo mas feo que has comida en la vida?	",
    "	si mueres ahora, quienes son los 6 que te cargarian?	",
    "	si cantaras en la ducha? que cancion seria?	",
    "	peor recuerdo de tus ex	",
    "	sol o luna	",
    "	ibas a la casa de tu amigo para ver a su hermana?	",
    "	te has arrepentido de besar a alguien?	",
    "	momento incomodo en el trabajo ?	",
    "	con lengua o sin lengua?	",
    "	morenos o blancos?	",
    "	la mejor broma que has hecho?	",
    "	matrix o el sr de los anillos?	",
    "	algun movimiento de seduccion en una cita?	",
    "	que te gusta hacer pero te da verguenza admitir?	",
    "	eres supersticioso?	",
    "	tu mejor experiencia?	",
    "	babeas o roncas en la cama?	",
    "	Un concierto al que antes de morir te gustaria ir?	",
    "	tienes un bucket list?	",
    "	manos chicas o manos grandes?	",
    "	salsa o rock?	",
    "	a que edad fue tu primera vez?	",
    "	te han dicho 'no eres tu , soy yo?'	",
    "	con medias o sin medias?	",
    "	series o peliculas?	",
    "	puedes mostrar la ultima foto de tu celular?	",
    "	has mandado fotos que a alguien q no debias?	",
    "	si tuvieras 3 deses como aladino, cuales serian?	",
    "	libro o videojuego?	",
    "	que parte de tu cuerpo te gusta más ?	",
    "	pecado capital favorito?	",
    "	de mañana o de noche?	",
    "	viaje al futuro o al pasado?	",
    "	tu emoticon favorito?	",
    "	pedir perdon o pedir permiso?	",
    "	mostaza o ketchup	",
    "	borras el historial del navegador	",
    "	cuando tienes hambre , eres?	",
    "	bailar o cantar?	",
    "	lo primero q ves en el sexo opuesto?	",
    "	grandes o chicas?	",
    "	en el cole eras tranquilo o malcriado?	",
    "	te gusta la navidad?	",
    "	encima o abajo?	",
    "	con o sin?	",
    "	feo con plata o guapo misio?	",
  ],

  EN: [
    "	ever been stalking someone and liked an old pic?	",
    "	ever been outside with no underwear on?	",
    "	ever used dirty underwear?	",
    "	ever taken something from a hotel?	",
    "	ever left somewhere without paying?	",
    "	ever ripped off someone?	",
    "	ever literally wet your pants from laughing?	",
    "	ever let out such a bad smelling fart and blamed it on someone else?	",
    "	ever taken out a booger out of your nose?	",
    "	what can you not stop doing before bedtime?	",
    "	ever a had a crush on a teacher at school?	",
    "	ever danced with someone and got too excited?	",
    "	who would you like to see naked?	",
    "	ever feel scared when people look at your phone's gallery?	",
    "	what would you do if you were the opposite sex one day?	",
    "	ever opened a liquor bottle and finished it the same day?	",
    "	ever given a gift to someone that was a gift sent to you?	",
    "	when you're teaching something to someone, ever lied to them because you forgot?	",
    "	ever gone in the bathroom, finished what you were doing and the realized there was no toilet paper?	",
    "	ever kissed someone from the same sex?	",
    "	ever eaten something expired even though you knew it was?	",
    "	ever bent over and your pants broke?	",
    "	ever liked someone older?	",
    "	you like them older or younger?	",
    "	what was the worst excuse someone used to break up with you?	",
    "	what was the worst excuse you used to break up with someone?	",
    "	ever given a fake phone number to someone?	",
    "	ever been invited over and didn't like the food?	",
    "	ever used underwear with holes?	",
    "	ever been drunk, kissed someone and then regreted it?	",
    "	ever stolen something?	",
    "	do you have a crush on someone famous?	",
    "	breast or leg?	",
    "	soda or drink?	",
    "	ever been pooped on by a bird?	",
    "	ever left chewing gum under something?	",
    "	ever tried to use counterfeit money?	",
    "	ever been watching a hot scene and had your parents walk in?	",
    "	ever been caught watching dirty stuff on the computer?	",
    "	what Disney princess would you like to be if you could be one?	",
    "	ever been about to run into someone you didn't want to say hello to and walked a different way to avoid them?	",
    "	what has been your best excuse to miss work?	",
    "	ever snuck food into a cinema?	",
    "	do you prefer to live a 63 yo or a 13 yo?	",
    "	ever cheated at school?	",
    "	ever taken your dog for a walk and not picked up its poop?	",
    "	ever invited someone to eat and ran short on cash?	",
    "	ever sneezed and farted at the same time?	",
    "	ever said you were going somewhere for a study session and went some place else?	",
    "	ever photoshopped your social media?	",
    "	ever peed in the pool?	",
    "	ever had dirty dreams?	",
    "	ever forgot to apply deodorant and you stunk?	",
    "	Have you pretended to speak so that they don't approach you?	",
    "	Have you seen porn?	",
    "	have you wanted to laugh when you kissed someone?	",
    "	The embarrassing moment of your life was...?	",
    "	Have you got the name of the person you are talking to wrong?	",
    "	If you were gay, who would you like to have an affair with?	",
    "	Did someone stand you up?	",
    "	Have you caught your parents in a hot moment?	",
    "	Have you been on a date and wanted it to be over?	",
    "	How was your worst kiss?	",
    "	What were your nicknames at school?	",
    "	After a big party did you blacked out ?	",
    "	Have you worn the same underwear two days in a row?	",
    "	When you get drunk you are...	",
    "	Have you stolen something from a store?	",
    "	What would be your ideal date?	",
    "	Have you kissed someone with bad breath?	",
    "	What do you buy when you want to treat yourself?	",
    "	have you ever seen a ghost?	",
    "	have you bored in middle of sex?	",
    "	After taking off your shoes, did you have to put them back because they smelled bad?	",
    "	How often do you say 'we have to see each other' knowing that they are not going to see each other?	",
    "	What would make you give up on a date?	",
    "	what kind of drunk person are you?	",
    "	do you pee in the shower?	",
    "	What would be your super power and why?	",
    "	What is the worst time to be asked for a photo?	",
    "	Have you dated two people at the same time without them knowing?	",
    "	Have you used your friendship to take advantage of a situation?	",
    "	Have you ever been seen or seen someone naked by any chance?	",
    "	Has anyone seen you sniffing your armpits?	",
    "	What is the weirdest compliment you've been told?	",
    "	What is the most beautiful compliment you have been told?	",
    "	What did your mom do to you when you didn't finish your meal?	",
    "	if your date has parsley in the teeth, do you tell him?	",
    "	If you were invisible for a day what would you do?	",
    "	Being in a relationship, have you wanted to be single for a day because you liked someone else?	",
    "	summer or winter?	",
    "	What do you do if you want to pee in a demo?	",
    "	have you sneaked into the cinema?	",
    "	lights on or off?	",
    "	The worst trip of my life was...	",
    "	Did you like your friend's partner?	",
    "	Have your clothes come off and you've been left naked on the beach?	",
    "	at day or night?	",
    "	fast or slow?	",
    "	when was the last time you had sex?	",
    "	with noise or in silence?	",
    "	the weirdest place you've done it?	",
    "	up or down?	",
    "	have bad breath or smell bad?	",
    "	what was your best kiss?	",
    "	do you have an embarrassing mania?	",
    "	how do you turn someone down?	",
    "	If your life were a movie, how would you title it?	",
    "	what is your favorite flavor of ice cream?	",
    "	do you flirt or wait to be flirted?	",
    "	Have you felt like resigning because of the people you work with?	",
    "	wanting to have sex with someone, have you told him no?	",
    "	What is your favorite song?	",
    "	If you didn't practice your career, what would you like to do?	",
    "	sour or bitter?	",
    "	beach or open field?	",
    "	If you could change something about yourself, what would it be?	",
    "	What's the worst thing an ex has asked you to do?	",
    "	face up or face down?	",
    "	have you fought for someone?	",
    "	When they invite you to go out somewhere, do you ask where?	",
    "	Do you like them taller, shorter or your size?	",
    "	what do you do in your free time?	",
    "	Do you like to do massages? or what do they do to you?	",
    "	Have you role-played?	",
    "	did you have food left on your teeth?	",
    "	What animal do you identify with?	",
    "	If you could dance with someone who would it be?	",
    "	math or language?	",
    "	a tip to seduce?	",
    "	what is your favorite position?	",
    "	dog or cat?	",
    "	what is your favorite curse word?	",
    "	what is your guilty pleasure?	",
    "	do you pee in the shower?	",
    "	What is the ugliest thing you have eaten in your life?	",
    "	If you die now, who are the 6 that would carry your coffin?	",
    "	if you sing in the shower? what song it would be?	",
    "	worst memory of your worst ex	",
    "	sun or moon?	",
    "	ever go to yours friend house to see his/her sister/brother?	",
    "	ever regreted to kiss someone?	",
    "	akward moment at work?	",
    "	with or without tonge?	",
    "	black or white?	",
    "	The best joke you have made?	",
    "	Matrix or the lord of the rings?	",
    "	any seduction move on a date?	",
    "	What do you like to do but you are ashamed to admit?	",
    "	Are you superstitious?	",
    "	Your best experience?	",
    "	drool or snore in bed?	",
    "	A concert that you would like to go to before you die?	",
    "	Do you have a buckt list?	",
    "	small hands or big hands?	",
    "	salsa or rock?	",
    "	At what age was your first time?	",
    "	Does anyone have told you 'is not you, it's me?'	",
    "	with or without socks?	",
    "	series or movies?	",
    "	Can you show the last photo of your cell phone?	",
    "	Have you sent photos to someone by mistake?	",
    "	If you had 3 desires like Aladdin, what would it be?	",
    "	book or video game?	",
    "	What part of your body do you like more?	",
    "	Favorite capital sin?	",
    "	morning or night?	",
    "	trip to the future or to the past?	",
    "	Your favorite emoticon?	",
    "	Say sorry or ask for permission?	",
    "	mustard or ketchup	",
    "	you delete the browser history?	",
    "	When you are hungry, you are...?	",
    "	dancing or singing?	",
    "	The first thing you see in the opposite sex?	",
    "	big or small?	",
    "	In the school , were you quiet or noisy?	",
    "	do you like Christmas?	",
    "	above or down?	",
    "	with or without?	",
    "	ugly with money or handsome wihthout money?	",
  ],
};

const getRandomQuestion = (language) => {
    const localisedQuestions = questions[language];
    return localisedQuestions[Math.floor(Math.random()*localisedQuestions.length)].trim();
};

export const questionService = {
  getRandomQuestion,
};


