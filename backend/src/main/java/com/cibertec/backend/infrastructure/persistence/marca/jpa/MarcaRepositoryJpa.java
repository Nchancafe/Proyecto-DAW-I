package com.cibertec.backend.infrastructure.persistence.marca.jpa;

import com.cibertec.backend.infrastructure.persistence.marca.entity.MarcaEntity;
import com.cibertec.backend.infrastructure.persistence.marca.projection.MarcaProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MarcaRepositoryJpa extends JpaRepository<MarcaEntity, Long> {

    // Buscar por descripción exacta
    Optional<MarcaEntity> findByDescripcion(String descripcion);

    @Query(value = """
            SELECT m.id as id,
                   m.descripcion as descripcion,
                   m.estado as estado
            FROM MarcaEntity m
            """)
    Page<MarcaProjection> findAllMarcas(Pageable pageable);
}
