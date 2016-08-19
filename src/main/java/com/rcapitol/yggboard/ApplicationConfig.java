package com.rcapitol.yggboard;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/rest")
public class ApplicationConfig extends Application {

    @SuppressWarnings("unchecked")
	public Set<Class<?>> getClasses() {
        return new HashSet<Class<?>>(Arrays.asList(
        		Rest_Habilidade.class,
        		Rest_Curso.class,
        		Rest_Carreira.class,
        		Rest_Usuario.class,
        		Rest_UserPerfil.class
        		));
    }
}
