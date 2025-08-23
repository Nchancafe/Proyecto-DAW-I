package com.cibertec.backend.presentation.camisa.controller;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.service.CamisaService;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/camisas")
@RequiredArgsConstructor
public class CamisaController {

//    private final CamisaService camisaService;
//
//    @GetMapping
//    public ResponseEntity<PaginaResult<CamisaModel>> listarCamisas(
//            @RequestParam(defaultValue = "0") int pagina,
//            @RequestParam(defaultValue = "10") int tamanio,
//            @RequestParam(defaultValue = "id") String ordenarPor,
//            @RequestParam(defaultValue = "asc") String direccion) {
//
//        PaginacionRequest paginacion = PaginacionRequest.builder()
//                .pagina(pagina)
//                .tamanio(tamanio)
//                .ordenarPor(ordenarPor)
//                .direccion(direccion)
//                .build();
//
//        PaginaResult<CamisaModel> resultado = camisaService.listarCamisas(paginacion);
//        return ResponseEntity.ok(resultado);
//    }
}
