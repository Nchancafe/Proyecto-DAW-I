package com.cibertec.backend.presentation.seguridad.dto;

public record LoginResponseDto(
        String accessToken,
        String refreshToken,
        Long expiresIn
) {
}

