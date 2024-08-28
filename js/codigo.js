let ppt_empate = 0;
let ppt_ganada = 0;
let ppt_perdida = 0;
let rrr_pc = aleatorio(1, 6);
let rrr_boton = 0;
let guia = 0
let rrr_reiniciar = 0;
let rr_ganada = 0;
let rr_perdida = 0;
let rr_racha = 0;
let rr_ganada_temp = 0;

function aleatorio(min, max)  {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function sonidodisparo() {
    let disparomp3 = new Audio("resources/mp3/disparo.mp3")
    disparomp3.play()
}

function sonidomovimiento() {
    let movimientomp3 = new Audio("resources/mp3/movimiento.mp3")
    movimientomp3.play()
}

function ejecutar_codigo() {
    let bott_ppt = document.getElementById("bott_ppt");
    let bott_rrr = document.getElementById("bott_rrr");
    let bott_rr = document.getElementById("bott_rr");
    let bott_text = document.getElementById("bott_text");

    bott_ppt.addEventListener("click", function() {
        seleccionar_juego("block", "none", "none", "none");
        piedra_papel_tijera();
    });

    bott_rrr.addEventListener("click", function() {
        seleccionar_juego("none", "block", "none", "none");
        ruleta_rusa_realista();
    });

    bott_rr.addEventListener("click", function() {
        seleccionar_juego("none", "none", "block", "none");
        ruleta_rusa();
    });
   
    bott_text.addEventListener("click", function() {
        seleccionar_juego("none", "none", "none", "block");
        parrafos();
    });    
};

function seleccionar_juego(sele_ppt_display, sele_rrr_display, sele_rr_display, sele_text_display) {
    let sect_ppt = document.getElementById("sect_ppt");
    let sect_rrr = document.getElementById("sect_rrr");
    let sect_rr = document.getElementById("sect_rr");
    let sect_text = document.getElementById("sect_text");

    sect_ppt.style.display = sele_ppt_display
    sect_rrr.style.display = sele_rrr_display
    sect_rr.style.display = sele_rr_display
    sect_text.style.display = sele_text_display
};

function piedra_papel_tijera() {
    let bott_ppt_piedra = document.getElementById("bott_ppt_piedra");
    let bott_ppt_papel = document.getElementById("bott_ppt_papel");
    let bott_ppt_tijera = document.getElementById("bott_ppt_tijera");
    let bott_ppt_reiniciar = document.getElementById("bott_ppt_reiniciar");
    let bott_ppt_info_1 = document.getElementById("bott_ppt_info_1")
    let bott_ppt_info_2 = document.getElementById("bott_ppt_info_2")
    let bott_ppt_info_3 = document.getElementById("bott_ppt_info_3")

    bott_ppt_reiniciar.addEventListener("click", ppt_reinicio);
    bott_ppt_info_1.addEventListener("click", ppt_reinicio);
    bott_ppt_info_2.addEventListener("click", ppt_reinicio);
    bott_ppt_info_3.addEventListener("click", ppt_reinicio);

    bott_ppt_piedra.addEventListener("click", function() {
        ppt_elecciones(1, "👊");
    })

    bott_ppt_papel.addEventListener("click", function() {
        ppt_elecciones(2, "🖐");
    })

    bott_ppt_tijera.addEventListener("click", function() {
        ppt_elecciones(3, "✌");
    })
};

function ppt_elecciones(seleccion, elemento) {
    let spn_ppt_eleccion_jugador = document.getElementById("spn_ppt_eleccion_jugador");
    
    ppt_funcion_resultado(seleccion);
    spn_ppt_eleccion_jugador.innerText = elemento

    sonidomovimiento()
};

function ppt_funcion_resultado(ppt_jugador) {
    let ppt_pc = aleatorio(1,3);
    let spn_ppt_eleccion_pc = document.getElementById("spn_ppt_eleccion_pc");
    let spn_ppt_resultado = document.getElementById("spn_ppt_resultado");

    if (ppt_pc == 1) {
        spn_ppt_eleccion_pc.innerHTML = "👊"

    } else if (ppt_pc == 2) {
        spn_ppt_eleccion_pc.innerHTML = "🖐"

    }  else if (ppt_pc == 3) {
        spn_ppt_eleccion_pc.innerHTML = "✌"

    }
    
    if (ppt_jugador == ppt_pc) {
        spn_ppt_resultado.innerHTML = "EMPATE"
        ppt_empate++

    } else if (ppt_jugador == 1 && ppt_pc == 3) {
        spn_ppt_resultado.innerHTML = "GANASTE"
        ppt_ganada++

    } else if (ppt_jugador == 2 && ppt_pc == 1) {
        spn_ppt_resultado.innerHTML = "GANASTE"
        ppt_ganada++

    } else if (ppt_jugador == 3 && ppt_pc == 2) {
        spn_ppt_resultado.innerHTML = "GANASTE"
        ppt_ganada++

    } else {
        spn_ppt_resultado.innerHTML = "PERDISTE"
        ppt_perdida += 1

    }
    
    ppt_funcion_texto(ppt_ganada, ppt_empate, ppt_perdida);

};

function ppt_funcion_texto(ppt_ganada, ppt_empate, ppt_perdida) {
    let spn_ppt_victorias_jugador = document.getElementById("spn_ppt_victorias_jugador");
    let spn_ppt_empates = document.getElementById("spn_ppt_empates");
    let spn_ppt_victorias_pc = document.getElementById("spn_ppt_victorias_pc");
    let spn_ppt_victorias_s_jugador = document.getElementById("spn_ppt_victorias(s)_jugador");
    let spn_ppt_empate_s = document.getElementById("spn_ppt_empate(s)");
    let spn_ppt_victoria_s_pc = document.getElementById("spn_ppt_victoria(s)_pc");

    spn_ppt_victorias_jugador.innerHTML = ppt_ganada
    spn_ppt_empates.innerHTML = ppt_empate
    spn_ppt_victorias_pc.innerHTML = ppt_perdida

    if (ppt_ganada > 1) {
        spn_ppt_victorias_s_jugador.innerHTML = "s"
    } else if (ppt_ganada == 1) {
        spn_ppt_victorias_s_jugador.innerHTML = ""
    }

    if (ppt_empate > 1) {
        spn_ppt_empate_s.innerHTML = "s"
    } else if (ppt_empate == 1) {
        spn_ppt_empate_s.innerHTML = ""
    }
    if (ppt_perdida > 1) {
        spn_ppt_victoria_s_pc.innerHTML = "s"
    } else if (ppt_perdida == 1) {
        spn_ppt_victoria_s_pc.innerHTML = ""
    }
};

function ppt_reinicio() {
    ppt_confirm_reinicio = prompt("¿Seguro que deseas reiniciar?, perderás todas las estadisticas. Escribe 1 para reiniciar o cualquier tecla para continuar.");

    if (ppt_confirm_reinicio == 1 ) {
        let spn_ppt_victorias_jugador = document.getElementById("spn_ppt_victorias_jugador");
        let spn_ppt_empates = document.getElementById("spn_ppt_empates");
        let spn_ppt_victorias_pc = document.getElementById("spn_ppt_victorias_pc");
        let spn_ppt_victorias_s_jugador = document.getElementById("spn_ppt_victorias(s)_jugador");
        let spn_ppt_empate_s = document.getElementById("spn_ppt_empate(s)");
        let spn_ppt_victoria_s_pc = document.getElementById("spn_ppt_victoria(s)_pc");
        let spn_ppt_resultado = document.getElementById("spn_ppt_resultado")

        ppt_empate = 0
        ppt_ganada = 0
        ppt_perdida = 0

        spn_ppt_eleccion_jugador.innerHTML = "👋"
        spn_ppt_eleccion_pc.innerHTML = "👋"
        spn_ppt_resultado.innerHTML = "EMPIEZA"

        spn_ppt_victorias_jugador.innerHTML = 0
        spn_ppt_empates.innerHTML = 0
        spn_ppt_victorias_pc.innerHTML = 0
        spn_ppt_victorias_s_jugador.innerHTML = "s"
        spn_ppt_empate_s.innerHTML = "s"
        spn_ppt_victoria_s_pc.innerHTML = "s"
    }
    
};

function ruleta_rusa_realista() {
    let bott_rrr_1 = document.getElementById("bott_rrr_1");
    let bott_rrr_2 = document.getElementById("bott_rrr_2");
    let bott_rrr_3 = document.getElementById("bott_rrr_3");
    let bott_rrr_4 = document.getElementById("bott_rrr_4");
    let bott_rrr_5 = document.getElementById("bott_rrr_5");
    let bott_rrr_6 = document.getElementById("bott_rrr_6");

    bott_rrr_1.addEventListener("click", function() {
        rrr_funcionamiento(1, rrr_pc)
        bott_rrr_1.disabled = true
    })

    bott_rrr_2.addEventListener("click", function() {
        rrr_funcionamiento(2, rrr_pc)
        bott_rrr_2.disabled = true
    })

    bott_rrr_3.addEventListener("click", function() {
        rrr_funcionamiento(3, rrr_pc)
        bott_rrr_3.disabled = true
    })

    bott_rrr_4.addEventListener("click", function() {
        rrr_funcionamiento(4, rrr_pc)
        bott_rrr_4.disabled = true
    })

    bott_rrr_5.addEventListener("click", function() {
        rrr_funcionamiento(5, rrr_pc)
        bott_rrr_5.disabled = true
    })

    bott_rrr_6.addEventListener("click", function() {
        rrr_funcionamiento(6, rrr_pc)
        bott_rrr_6.disabled = true
    })

    bott_rrr_reiniciar.addEventListener("click", rrr_reinicio);
};

function rrr_funcionamiento(rrr_boton, rrr_pc) {

    if (rrr_boton == 0) {
        alert("Debes elegir un numero antes de disparar.")

    } else {
        let rrr_elige_jugador = document.getElementById("rrr_elige_jugador");
        let rrr_resultado = document.getElementById("rrr_resultado")
        rrr_elige_jugador.innerHTML = rrr_boton

        if (rrr_boton == rrr_pc) {
            rrr_muerte(rrr_boton)
        } else if (rrr_boton != rrr_pc) {
            rrr_resultado.innerHTML = "No es el " + rrr_boton
        }

        sonidodisparo()
         
    }
};

function rrr_muerte(rrr_boton) {
    let rrr_estado_jugador = document.getElementById("rrr_estado_jugador")
    
    rrr_resultado.innerHTML = "MUERES 💀 ERA EL " + rrr_boton
    
    bott_rrr_1.disabled = true
    bott_rrr_2.disabled = true
    bott_rrr_3.disabled = true
    bott_rrr_4.disabled = true
    bott_rrr_5.disabled = true
    bott_rrr_6.disabled = true

    rrr_reiniciar = 1
    rrr_estado_jugador.innerHTML = "💀"
}

function rrr_reinicio() {
    if (rrr_reiniciar == 1) {
        let rrr_elige_jugador = document.getElementById("rrr_elige_jugador")
        let rrr_resultado = document.getElementById("rrr_resultado")
        let rrr_estado_jugador = document.getElementById("rrr_estado_jugador")

        bott_rrr_1.disabled = false
        bott_rrr_2.disabled = false
        bott_rrr_3.disabled = false
        bott_rrr_4.disabled = false
        bott_rrr_5.disabled = false
        bott_rrr_6.disabled = false

        rrr_elige_jugador.innerHTML = "0"
        rrr_resultado.innerHTML = "Empieza."
        rrr_pc = aleatorio(1, 6);
        rrr_boton = 0;
        rrr_reiniciar = 0
        rrr_estado_jugador.innerHTML = "😁"
    } else {
        alert("Debes morir para poder reiniciar.")
    }
    
};

function ruleta_rusa() {
    let bott_rr_1 = document.getElementById("bott_rr_1")
    let bott_rr_2 = document.getElementById("bott_rr_2")
    let bott_rr_3 = document.getElementById("bott_rr_3")
    let bott_rr_4 = document.getElementById("bott_rr_4")
    let bott_rr_5 = document.getElementById("bott_rr_5")
    let bott_rr_6 = document.getElementById("bott_rr_6")
    let rr_jugador = 0

    bott_rr_1.addEventListener("click", function() {
        rr_funcionamiento(1)
    })

    bott_rr_2.addEventListener("click", function() {
        rr_funcionamiento(2)
    })

    bott_rr_3.addEventListener("click", function() {
        rr_funcionamiento(3)
    })

    bott_rr_4.addEventListener("click", function() {
        rr_funcionamiento(4)
    })

    bott_rr_5.addEventListener("click", function() {
        rr_funcionamiento(5)
    })

    bott_rr_6.addEventListener("click", function() {
        rr_funcionamiento(6)
    })

    bott_rr_reiniciar.addEventListener("click", rr_reinicio);
    
};

function rr_funcionamiento(rr_jugador) {
    let rr_pc = aleatorio(1, 6)
    let nada = ""
    
    spn_rr_eleccion_jugador.innerHTML = rr_jugador
    spn_rr_eleccion_pc.innerHTML = rr_pc

    if (rr_jugador == rr_pc) {
        spn_rr_resultado.innerHTML = "MUERES. 💀"
        rr_jugador = nada
        rr_perdida += 1
        rr_ganada_temp = 0
        guia = 1
        rr_funcion_texto(rr_ganada, rr_perdida, rr_ganada_temp, rr_racha)

    } else {
        spn_rr_resultado.innerHTML = "GANAS"
        rr_jugador = nada
        rr_ganada_temp += 1
        rr_ganada += 1

        if (guia == 0) {
            rr_racha += 1
        }

        if (rr_ganada_temp > rr_racha) {
            rr_racha = rr_ganada_temp
            guia = 0
        }

        rr_funcion_texto(rr_ganada, rr_perdida, rr_ganada_temp, rr_racha)
    }

    sonidodisparo()
}

function rr_funcion_texto(rr_ganada, rr_perdida, rr_ganada_temp, rr_racha) {
    let spn_rr_victorias_jugador = document.getElementById("spn_rr_victorias_jugador");
    let spn_rr_victorias_s_jugador = document.getElementById("spn_rr_victorias(s)_jugador");
    let spn_rr_victorias_pc = document.getElementById("spn_rr_victorias_pc");
    let spn_rr_ve_z_pc = document.getElementById("spn_rr_ve(z)_pc");
    let spn_rr_ganadas_temp = document.getElementById("spn_rr_ganadas_temp");
    let spn_rr_racha = document.getElementById("spn_rr_racha");

    spn_rr_victorias_jugador.innerHTML = rr_ganada
    spn_rr_victorias_pc.innerHTML = rr_perdida
    spn_rr_ganadas_temp.innerHTML = rr_ganada_temp
    spn_rr_racha.innerHTML = rr_racha

    if (rr_ganada > 1) {
        spn_rr_victorias_s_jugador.innerHTML = "s"
    } else if (rr_ganada == 1) {
        spn_rr_victorias_s_jugador.innerHTML = ""
    }

    if (rr_perdida > 1) {
        spn_rr_ve_z_pc.innerHTML = "s"
    } else if (rr_perdida == 1) {
        spn_rr_ve_z_pc.innerHTML = ""
    }
};

function rr_reinicio() {
    rr_confirm_reinicio = prompt("¿Seguro que deseas reiniciar?, perderás todo. Escribe 1 para reiniciar o cualquier tecla para continuar.")

    if (rr_confirm_reinicio == 1) {
        let spn_rr_eleccion_jugador = document.getElementById("spn_rr_eleccion_jugador")
        let spn_rr_eleccion_pc = document.getElementById("spn_rr_eleccion_pc")
        let spn_rr_victorias_jugador = document.getElementById("spn_rr_victorias_jugador")
        let spn_rr_victorias_s_jugador = document.getElementById("spn_rr_victorias(s)_jugador")
        let spn_rr_victorias_pc = document.getElementById("spn_rr_victorias_pc")
        let spn_rr_ve_z_pc = document.getElementById("spn_rr_ve(z)_pc")
        let spn_rr_ganadas_temp = document.getElementById("spn_rr_ganadas_temp")
        let spn_rr_racha = document.getElementById("spn_rr_racha")
        
        rr_ganada = 0
        rr_perdida = 0
        rr_racha = 0
        rr_ganada_temp = 0

        spn_rr_eleccion_jugador.innerHTML = 0
        spn_rr_eleccion_pc.innerHTML = 0
        spn_rr_victorias_jugador.innerHTML = 0
        spn_rr_victorias_s_jugador.innerHTML = "s"
        spn_rr_victorias_pc.innerHTML = 0
        spn_rr_ve_z_pc.innerHTML = "s"
        spn_rr_ganadas_temp.innerHTML = 0
        spn_rr_racha.innerHTML = 0
    }

};

function parrafos() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            setTimeout(parrafos_ingresar, 500);
        }
    });

    let inp_text_jugador = document.getElementById("inp_text_jugador");
    let bott_ingresar_text =  document.getElementById("bott_ingresar_text");
    let bott_text_reiniciar = document.getElementById("bott_text_reiniciar");
    
    bott_ingresar_text.addEventListener("click", parrafos_ingresar);

    bott_text_reiniciar.addEventListener("click", function() {
        text_confirm_reinicio = prompt("¿Seguro que deseas reiniciar?, perderás todo. Escribe 1 para reiniciar o cualquier tecla para continuar.")

        if (text_confirm_reinicio == 1) {
        inp_text_jugador.value = ""
        sect_text_creados.innerHTML = ""
        document.getElementById("sect_text_sale").style.display = "none";
        }
    });
};

function parrafos_ingresar() {
    let sect_text_sale = document.getElementById("sect_text_sale");
    let sect_text_creados = document.getElementById("sect_text_creados");
    let text_parrafo = document.createElement("p");
    text_parrafo.className = "text_parrafo_creado"

    text_parrafo.innerHTML = inp_text_jugador.value
    sect_text_creados.appendChild(text_parrafo);
    sect_text_sale.style.display = "block"
}

window.addEventListener("load", ejecutar_codigo);