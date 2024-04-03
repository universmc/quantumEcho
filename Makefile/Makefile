##----------------------------##
#    MAGIC MAKEFILE           #
##----------------------------##
#          MENU               #
#      []CODEX                #
#      []BUILD                #
#      []REP                  #
#      []FILE                 #
#      []SCRIPT()             #
#      []CLEAN                #
#      []MENU                 #
#      []INSTALL_ZSH          #
#      []CLEAN_ZSH            #
##----------------------------##
# Le Makefile des rêveurs et des explorateurs
MAGIC_TARGETS := codex build menu install_zsh clean_zsh

all: mkB $(MAGIC_TARGETS)

# Magie des mots
codex:
	@echo "Quantum whispers reveal a story to be told"
	@node codex.js
	
build: buildHtml buildCss buildJS buildJson
# Fabrication de la magie
buildHtml:
	@echo "Crafting web's fabric with quantum threads so bold"
	@node html.js

buildCss:
	@echo "Shaping beauty with qubits in every fold"
	@node css.js

buildJS:
	@echo "Weaving the logic with quantum entanglements we behold"
	@node javascript.js

buildJson:
	@echo "Encoding knowledge in cosmic structures, truths to uphold"
	@node json.js

# Ouvrez-vous aux dimensions cachées
mkB:
	@echo "Awakening a new dimension with a cosmic click"
	@bash build.sh

# Afficher le menu
menu:
	@bash menu.sh

# Gestion des configurations zsh
ZSH_CONFIG_DIR = ~/.zsh_config
MODULE_ZSH_DIR = ~/.module.zsh

install_zsh:
	@echo "Installing zsh configurations..."
	@cp -v $(ZSH_CONFIG_DIR)/*.sh $(MODULE_ZSH_DIR)
	@echo "Zsh configurations installed."

clean_zsh:
	@echo "Cleaning up installed zsh configurations..."
	@rm -f $(MODULE_ZSH_DIR)/*.sh
	@echo "Zsh configurations cleaned."

# Nettoyage de l'éther
clean-r:
	@echo "Returning the quantum realm to pristine state"
	@rm -rf output/* build/* src/* data/*

clean-R:
	@echo "Unweaving the fabric, a celestial fate"
	@rm -rf output/ build/ src/ data/

clean: clean-r clean-R