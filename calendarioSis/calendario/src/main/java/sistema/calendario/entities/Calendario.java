package sistema.calendario.entities;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "calendario")
public class Calendario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String descricao;
	
	private LocalTime hora_inicio;
	
	private LocalTime hora_termino;

	public Calendario() {
	}

	public Calendario(Integer id, String descricao, LocalTime hora_inicio, LocalTime hora_termino) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.hora_inicio = hora_inicio;
		this.hora_termino = hora_termino;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public LocalTime getHora_inicio() {
		return hora_inicio;
	}

	public void setHora_inicio(LocalTime hora_inicio) {
		this.hora_inicio = hora_inicio;
	}

	public LocalTime getHora_termino() {
		return hora_termino;
	}

	public void setHora_termino(LocalTime hora_termino) {
		this.hora_termino = hora_termino;
	}
	
}
