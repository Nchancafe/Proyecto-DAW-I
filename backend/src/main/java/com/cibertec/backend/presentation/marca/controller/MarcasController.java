package com.cibertec.backend.presentation.marca.controller;

import com.cibertec.backend.domain.marca.valueobject.PaginaResult;
import com.cibertec.backend.domain.marca.valueobject.PaginacionRequest;
import com.cibertec.backend.domain.marca.model.MarcaModel;
import com.cibertec.backend.domain.marca.service.MarcaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/marcas")
@RequiredArgsConstructor
public class MarcasController {
   private final MarcaService marcaService;

   @GetMapping
    public ResponseEntity<PaginaResult<MarcaModel>> listarMarcas(
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

       PaginaResult<MarcaModel> resultado = marcaService.listarMarcas(paginacion);
       return ResponseEntity.ok(resultado);
   }
}
