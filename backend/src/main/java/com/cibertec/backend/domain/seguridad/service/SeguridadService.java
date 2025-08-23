package com.cibertec.backend.domain.seguridad.service;


import com.cibertec.backend.domain.seguridad.model.SeguridadModel;

public interface SeguridadService {
    SeguridadModel autenticacion(String username, String password);

    SeguridadModel refrescar(String token);
}
