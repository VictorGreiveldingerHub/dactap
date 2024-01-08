import Link from "next/link";

export default function LegalNoticePage(){
    return (
        <div className="mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">Mentions Légales</h1>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Éditeur du site</h2>
                <p>Nom : Dactap</p>
                <p>Adresse : 7 Rue Edouard Belin, 57070 Metz</p>
                <p>Téléphone : 03 87 78 08 08</p>
                <p>Email : contact@dactap.fr</p>
                <p>SIRET : 82047291800011</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Directeur de la publication</h2>
                <p>Nom : Mattéo BIENAIME</p>
                <p>Email : matteo.bienaime@dactap.fr</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Hébergeur du site</h2>
                <p>Nom : Hostinger International Ltd.</p>
                <p>Adresse : 61 Lordou Vironos Street, Lumiel Building, 6023 Larnaca, Cyprus</p>
                <p>Téléphone : +352 208 80 287</p>
                <p>Email : support@hostinger.com</p>
                <p>Numéro d'identification : 14264613</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Propriété intellectuelle</h2>
                <p>
                    Tous les contenus présents sur le site Dactap, les textes, images, logo, vidéos, 
                    sont protégés par le droit de la propriété intellectuelle. 
                    Conformément aux articles L 335-2 et suivants du Code de la propriété intellectuelle, 
                    toute reproduction, distribution, ou représentation totale ou partielle de ces contenus 
                    est interdite.
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Protection des données personnelles</h2>
                <p>
                    Les informations personnelles collectées lors de l'inscription des utilisateurs sont 
                    traitées conformément à notre{" "}{<Link className="underline" href="/privacy-policy">politique de confidentialité</Link>}. 
                    Conformément au Règlement Général sur la Protection des Données{" "}{<Link className="underline" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees">(RGPD)</Link>}{" "}
                    et à la {" "}{<Link className="underline" href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460">loi Informatique et Libertés</Link>}{" "}, les utilisateurs majeurs ont le droit d'accéder, de rectifier, 
                    ou de supprimer leurs données personnelles par leurs propres chef ou en contactant Dactap. 
                    Pour les utilisateurs mineurs, seulemement les tuteurs ou/et tutrices légaux ont le droit d'accéder, de rectifier, 
                    ou de supprimer les données personnelles par leurs propres chef ou en contactant Dactap.
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Utilisation des cookies</h2>
                <p>
                    Le site utilise des cookies pour améliorer l'expérience de navigation des utilisateurs. 
                    Un cookie est un bloc de données qui ne permet pas d'identifier l'utilisateur, mais qui enregistre des informations 
                    relatives à la navigation de celui-ci sur le site.
                    En utilisant ce site, vous consentez à l'utilisation de cookies conformément à notre politique en la matière. 
                    L 'utilisateur est informé de son droit de s'opposer à l'utilisation de ces cookies en paramétrant son navigateur.
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Conditions générales d'utilisation</h2>
                <p>
                    En utilisant notre site, vous acceptez les conditions générales d'utilisation{" "}{<Link className="underline" href="/cgu">(C.G.U)</Link>}{" "}. 
                    Les ergothérapeutes s'engagent à respecter les règles et tarifs définis dans le cadre de l'abonnement annuel. 
                    Les abonnements souscrits sont fermes et définitifs, 
                    et aucune résiliation ne sera acceptée après le paiement de l'abonnement.
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Responsabilité</h2>
                <p>
                    L'éditeur du site décline toute responsabilité quant à l'utilisation des jeux proposés dans le cadre de l'application. 
                    Ces jeux sont destinés à l'entraînement des personnes atteintes de dyspraxie sous la supervision des ergothérapeutes. 
                    Conformément à{" "}{<Link className="underline" href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032041559">l'article 1242</Link>}{" "} du Code civil, 
                    l'éditeur ne saurait être tenu responsable des dommages directs ou indirects causés par l'utilisation des jeux.
                </p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold py-2">Modification des mentions légales</h2>
                <p>
                    L'éditeur se réserve le droit de modifier les présentes mentions légales à tout moment. 
                    Les utilisateurs seront informés de ces modifications par le biais d'une notification sur le site ou/et par email. 
                    Les utilisateurs sont invités à consulter régulièrement les mentions légales.
                </p>
            </section>
        </div>
    );
};