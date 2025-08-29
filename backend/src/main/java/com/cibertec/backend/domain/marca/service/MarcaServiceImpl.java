package com.cibertec.backend.domain.marca.service;

import com.cibertec.backend.domain.marca.valueobject.PaginaResult;
import com.cibertec.backend.domain.marca.valueobject.PaginacionRequest;
import com.cibertec.backend.domain.marca.model.MarcaModel;
import com.cibertec.backend.domain.marca.repository.MarcaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MarcaServiceImpl implements MarcaService {

    private final MarcaRepository marcaRepository;

    @Override
    public PaginaResult<MarcaModel> listarMarcas(PaginacionRequest paginacion) {
        return marcaRepository.listarMarcas(paginacion);
    }
}
