package com.rmit.sept.bk_loginservices.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Getter @Setter @NoArgsConstructor
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long notificationId;

    @NotBlank(message = "Content is required")
    private String content;

    private Date createdAt;

    @JsonBackReference(value="user-notification")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private User user;

    @PrePersist
    protected void onCreatedAt(){
        this.createdAt = new Date();
    }

}
