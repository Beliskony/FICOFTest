import { useState } from "react";
import type { FormEvent } from "react";
import { X, Send, CheckCircle, User, Mail, Phone, BookOpen, Calendar, ChevronDown } from "lucide-react";
import type { Formation, InscriptionForm } from "../../Interfaces/formationstype"
import { formations } from "../../data/formations.data";

type Props = {
  formationPreSelectionnee?: Formation;
  onClose: () => void;
};

const initialForm: InscriptionForm = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  formation: "",
  session: "",
  niveau: "",
  message: "",
};

export default function FormulaireInscription({ formationPreSelectionnee, onClose }: Props) {
  const [form, setForm] = useState<InscriptionForm>({
    ...initialForm,
    formation: formationPreSelectionnee?.id ?? "",
    session: formationPreSelectionnee?.inscription.sessions[0] ?? "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<InscriptionForm>>({});

  const formationSelectionnee = formations.find((f) => f.id === form.formation);

  const validate = (): boolean => {
    const newErrors: Partial<InscriptionForm> = {};
    if (!form.nom.trim()) newErrors.nom = "Requis";
    if (!form.prenom.trim()) newErrors.prenom = "Requis";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email invalide";
    if (!form.telephone.trim()) newErrors.telephone = "Requis";
    if (!form.formation) newErrors.formation = "Veuillez choisir une formation";
    if (!form.session) newErrors.session = "Veuillez choisir une session";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Réinitialiser la session si la formation change
    if (name === "formation") {
      setForm((prev) => ({ ...prev, formation: value, session: "" }));
    }
    if (errors[name as keyof InscriptionForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulation envoi
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  // ─── Succès ───────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-500" strokeWidth={1.8} />
          </div>
          <h3 className="text-2xl font-black text-neutral-800 mb-3">
            Inscription envoyée !
          </h3>
          <p className="text-neutral-500 text-[15px] mb-2">
            Votre demande d'inscription a bien été reçue.
          </p>
          <p className="text-neutral-400 text-[13px] mb-8">
            Notre équipe vous contactera dans les <strong className="text-neutral-600">48h</strong> pour confirmer votre place et vous transmettre les informations de paiement.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-[#0C3823] text-white font-bold py-3.5 rounded-xl hover:bg-[#0f4a2d] transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  // ─── Formulaire ──────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4 md:p-8">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-7 border-b border-neutral-100">
          <div>
            <h2 className="text-xl font-black text-neutral-800">Formulaire d'inscription</h2>
            <p className="text-neutral-400 text-[13px] mt-0.5">
              {formationSelectionnee
                ? formationSelectionnee.titre
                : "Choisissez votre formation ci-dessous"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 transition-colors"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-7 space-y-6">
          {/* Infos personnelles */}
          <fieldset>
            <legend className="text-[11px] font-black text-[#0C3823] uppercase tracking-[0.18em] mb-4">
              Informations personnelles
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Nom"
                icon={<User size={14} />}
                error={errors.nom}
              >
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={inputClass(!!errors.nom)}
                />
              </Field>
              <Field label="Prénom" icon={<User size={14} />} error={errors.prenom}>
                <input
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  className={inputClass(!!errors.prenom)}
                />
              </Field>
              <Field label="Email" icon={<Mail size={14} />} error={errors.email}>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                  className={inputClass(!!errors.email)}
                />
              </Field>
              <Field label="Téléphone" icon={<Phone size={14} />} error={errors.telephone}>
                <input
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="+225 00 00 00 00 00"
                  className={inputClass(!!errors.telephone)}
                />
              </Field>
            </div>
          </fieldset>

          {/* Choix de la formation */}
          <fieldset>
            <legend className="text-[11px] font-black text-[#0C3823] uppercase tracking-[0.18em] mb-4">
              Formation souhaitée
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Formation"
                icon={<BookOpen size={14} />}
                error={errors.formation}
                className="sm:col-span-2"
              >
                <div className="relative">
                  <select
                    name="formation"
                    value={form.formation}
                    onChange={handleChange}
                    className={`${inputClass(!!errors.formation)} appearance-none pr-10`}
                  >
                    <option value="">Sélectionner une formation</option>
                    {formations.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.titre}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                </div>
              </Field>

              {formationSelectionnee && (
                <Field label="Session" icon={<Calendar size={14} />} error={errors.session}>
                  <div className="relative">
                    <select
                      name="session"
                      value={form.session}
                      onChange={handleChange}
                      className={`${inputClass(!!errors.session)} appearance-none pr-10`}
                    >
                      <option value="">Choisir une session</option>
                      {formationSelectionnee.inscription.sessions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                  </div>
                </Field>
              )}

              <Field label="Niveau actuel" icon={<User size={14} />}>
                <div className="relative">
                  <select
                    name="niveau"
                    value={form.niveau}
                    onChange={handleChange}
                    className={`${inputClass(false)} appearance-none pr-10`}
                  >
                    <option value="">Sélectionner</option>
                    <option>Débutant</option>
                    <option>Intermédiaire</option>
                    <option>Avancé</option>
                    <option>Expert</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                </div>
              </Field>
            </div>
          </fieldset>

          {/* Message */}
          <Field label="Message ou questions (optionnel)" icon={<Mail size={14} />}>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Des questions spécifiques sur la formation ?"
              className={`${inputClass(false)} resize-none`}
            />
          </Field>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-[#0C3823] text-white font-black text-[15px] py-4 rounded-2xl hover:bg-[#0f4a2d] active:scale-[0.99] disabled:opacity-60 transition-all shadow-lg shadow-green-900/20"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Envoi en cours…
              </>
            ) : (
              <>
                <Send size={16} strokeWidth={2.5} />
                Envoyer ma demande d'inscription
              </>
            )}
          </button>

          <p className="text-center text-neutral-400 text-[12px]">
            En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe FICOF.
          </p>
        </form>
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-[14px] text-neutral-800 placeholder:text-neutral-400 outline-none transition-colors ${
    hasError
      ? "border-red-300 bg-red-50 focus:border-red-400"
      : "border-neutral-200 bg-neutral-50 focus:border-[#0C3823] focus:bg-white"
  }`;
}

type FieldProps = {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

function Field({ label, icon, error, children, className = "" }: FieldProps) {
  return (
    <div className={className}>
      <label className="flex items-center gap-1.5 text-[12px] font-bold text-neutral-600 mb-1.5">
        {icon && <span className="text-[#0C3823]">{icon}</span>}
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-[11px] mt-1 font-medium">{error}</p>}
    </div>
  );
}