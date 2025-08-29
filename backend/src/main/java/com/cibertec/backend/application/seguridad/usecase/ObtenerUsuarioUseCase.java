package com.cibertec.backend.application.seguridad.usecase;

import com.cibertec.backend.application.seguridad.dto.UsuarioDto;
import com.cibertec.backend.domain.seguridad.model.UsuarioModel;
import com.cibertec.backend.domain.seguridad.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ObtenerUsuarioUseCase {
    private final UsuarioRepository usuarioRepository;

    public Optional<UsuarioDto> ejecutar(String username) {
        // Usa el repositorio del dominio para obtener el modelo
        Optional<UsuarioModel> usuarioModel = usuarioRepository.usuarioPorUserName(username);

        // Mapea el modelo a DTO si está presente
        return usuarioModel.map(u -> UsuarioDto.builder()
                .username(u.getUsername())
                .email(u.getEmail())
                .nombre(u.getNombre())
                .apellido(u.getApellido())
                .build());
    }
}
