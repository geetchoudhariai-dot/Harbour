import Image from "next/image";
import { UserRound } from "lucide-react";
import { team } from "../lib/site";

export default function TeamGrid({ dentistDisplayName }: { dentistDisplayName?: string }) {
  return (
    <div className="team-grid" role="list" aria-label="Harbour View Dental team members">
      {team.map((member) => {
        const displayName = member.lead && dentistDisplayName ? dentistDisplayName : member.name;

        return (
          <article className="team-card fade-up" key={member.name} role="listitem">
            <div className="team-photo">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={`${displayName}, ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 180px"
                  style={
                    member.name === "Pankti Desai" || member.name === "Sakshi Ganguli"
                      ? { objectPosition: "center 15%" }
                      : undefined
                  }
                />
              ) : (
                <span className="team-photo-icon" aria-hidden="true">
                  <UserRound size={56} strokeWidth={1.4} />
                </span>
              )}
            </div>
            <span className="team-tag">{member.role}</span>
            <span className="team-name">{displayName}</span>
          </article>
        );
      })}
    </div>
  );
}
