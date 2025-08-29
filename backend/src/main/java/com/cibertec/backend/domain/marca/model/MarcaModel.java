package com.cibertec.backend.domain.marca.model;
import jakarta.persistence.*;
import lombok.*;
@Entity @Table(name = "marca")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class MarcaModel {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 80)
    private String nombre;
    @Column(nullable = false)
    private boolean estado = true;
}
