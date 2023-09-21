import CertificatesAndPatents from "@/components/CertificatesAndPatents/CertificatesAndPatents";

import './Certificates.scss';

export default function Certificate() {
  return (
    <div className="certificate">
      <h1 className="certificate__title">Certificates</h1>
      <p className="certificate__text">
        The implementation of the quality management system guarantees that the quality of the manufactured products is stable and focused on a specific consumer, and increases the company{`'`}s competitiveness.
      </p>

      <CertificatesAndPatents status={false}/>
    </div>
  )
}