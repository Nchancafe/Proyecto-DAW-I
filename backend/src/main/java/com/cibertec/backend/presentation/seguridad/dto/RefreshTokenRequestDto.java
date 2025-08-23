package com.cibertec.backend.presentation.seguridad.dto;

import jakarta.validation.constraints.NotBlank;

public record RefreshTokenRequestDto(
        @NotBlank(message = "El refresh token es obligatorio")
        String refreshToken
) {
}
