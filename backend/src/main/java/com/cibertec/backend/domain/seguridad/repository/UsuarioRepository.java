package com.cibertec.backend.domain.seguridad.repository;

import com.cibertec.backend.domain.seguridad.model.UsuarioModel;

import java.util.Optional;


public interface UsuarioRepository {
    Optional<UsuarioModel> usuarioPorUserName(String username);

    void guardarToken(String token);

    String obtenerTokenCache(String username);
}
