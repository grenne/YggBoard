package com.yggboard;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/rest")
public class ApplicationConfig extends Application {

    public Set<Class<?>> getClasses() {
        return new HashSet<Class<?>>(Arrays.asList(
        		Rest_Habilidade.class,
        		Rest_Curso.class,
        		Rest_Carreira.class,
        		Rest_Badge.class,
        		Rest_Usuario.class,
        		Rest_UserPerfil.class,
        		Rest_Setup.class,
        		Rest_UploadFiles.class,
        		Rest_Email.class
        		
        		));
    }
}
