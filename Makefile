VERSION=0.0.1
NOMBRE="visita"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${G}visita${N}"
	@echo ""
	@echo "  ${Y}Para desarrolladores${N}"
	@echo ""
	@echo "    ${G}iniciar${N}         Instala dependencias."
	@echo "    ${G}ejecutar_linux${N}  Prueba la aplicacion sobre Huayra."
	@echo "    ${G}ejecutar_mac${N}    Prueba la aplicacion sobre OSX."
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}publicar${N}        Incrementa la versión."
	@echo "    ${G}crear_deb${N}       Empaqueta para huayra."
	@echo ""


iniciar:
	npm install

ejecutar_linux:
	nw src

ejecutar_mac:
	/Applications/nwjs.app/Contents/MacOS/nwjs src

publicar:
	dch -i

crear_deb:
	dpkg-buildpackage -us -uc
