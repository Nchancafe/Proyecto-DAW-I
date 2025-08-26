package com.cibertec.backend.domain.camisa.service;

import com.cibertec.backend.domain.camisa.model.CamisaModel;
import com.cibertec.backend.domain.camisa.repository.CamisaRepository;
import com.cibertec.backend.domain.camisa.valueobject.PaginaResult;
import com.cibertec.backend.domain.camisa.valueobject.PaginacionRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CamisaServiceImpl implements CamisaService {

    private final CamisaRepository camisaRepository;

    @Override
    public PaginaResult<CamisaModel> listarCamisas(PaginacionRequest paginacion) {
        return camisaRepository.listarCamisas(paginacion);
    }

}
