package com.cibertec.backend.presentation.marca.controller;

import com.cibertec.backend.domain.marca.valueobject.PaginaResult;
import com.cibertec.backend.domain.marca.valueobject.PaginacionRequest;
import com.cibertec.backend.domain.marca.model.MarcaModel;
import com.cibertec.backend.domain.marca.service.MarcaService;
import com.cibertec.backend.presentation.marca.dto.MarcaDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/marcas")
@RequiredArgsConstructor
public class MarcasController {
   private final MarcaService marcaService;

   @GetMapping
   public ResponseEntity<PaginaResult<MarcaDTO>> listarMarcas(
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

      PaginaResult<MarcaDTO> resultadoDto = PaginaResult.<MarcaDTO>builder()
              .contenido(
                      resultado.getContenido().stream().map(marca -> {
                         MarcaDTO dto = new MarcaDTO();
                         dto.setId(marca.getId());
                          System.out.println("Descripcion de marca: " + marca.getDescripcion());
                         dto.setDescripcion(marca.getDescripcion());
                         dto.setEstado(marca.isEstado());
                         return dto;
                      }).collect(Collectors.toList())
              )
              .paginaActual(resultado.getPaginaActual())
              .tamanio(resultado.getTamanio())
              .totalElementos(resultado.getTotalElementos())
              .totalPaginas(resultado.getTotalPaginas())
              .primera(resultado.isPrimera())
              .ultima(resultado.isUltima())
              .vacia(resultado.isVacia())
              .build();

      return ResponseEntity.ok(resultadoDto);
   }
}
