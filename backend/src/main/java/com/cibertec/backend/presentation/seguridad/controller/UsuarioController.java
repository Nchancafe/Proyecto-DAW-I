package com.cibertec.backend.presentation.seguridad.controller;

import com.cibertec.backend.application.seguridad.dto.UsuarioDto;
import com.cibertec.backend.domain.seguridad.service.SeguridadService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final SeguridadService seguridadService;

    @GetMapping("/me")
    public ResponseEntity<UsuarioDto> obtenerMiPerfil() {
        // Obtiene el objeto de autenticación del contexto de seguridad
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName(); // El nombre de usuario está en el token

        UsuarioDto usuarioDto = seguridadService.obtenerDetallesDeUsuario(username);

        if (usuarioDto == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(usuarioDto);
    }
}
