package com.cibertec.backend.presentation.camisa.controller;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.service.CamisaService;
import com.cibertec.backend.presentation.camisa.dto.CamisaRequestDto;
import com.cibertec.backend.presentation.camisa.dto.CamisaResponseDto;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;
import com.cibertec.backend.presentation.camisa.mapper.CamisaDtoMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api/camisas")
@RequiredArgsConstructor
public class CamisaController {

    private final CamisaService camisaService;
    private final CamisaDtoMapper dtoMapper;

    @GetMapping
    public ResponseEntity<PaginaResult<CamisaModel>> listarCamisas(
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "10") int tamanio,
            @RequestParam(defaultValue = "id") String ordenarPor,
            @RequestParam(defaultValue = "asc") String direccion) {

        PaginacionRequest paginacion = PaginacionRequest.builder()
                .pagina(pagina)
                .tamanio(tamanio)
                .ordenarPor(ordenarPor)
                .direccion(direccion)
                .build();

        PaginaResult<CamisaModel> resultado = camisaService.listarCamisas(paginacion);
        return ResponseEntity.ok(resultado);
    }

//    @PostMapping
//    public ResponseEntity<CamisaResponseDto> crear(@RequestBody @Valid CamisaRequestDto request,
//                                                   Authentication auth) {
//        var cmd = dtoMapper.toCommand(request);
//        var usuario = (auth != null) ? auth.getName() : "system";
//        var model = camisaService.crearCamisa(cmd, usuario);
//        return ResponseEntity.ok(dtoMapper.toResponse(model));
//    }
}
