import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms & Conditions | Spacetime",
  description: "Terms of Use for Spacetime coworking memberships and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.breadcrumb}>Home &rsaquo; Terms &amp; Conditions</p>
            <h1 className={styles.heroTitle}>Terms &amp; Conditions</h1>
          </div>
        </div>

        <div className={styles.container}>

          <section className={styles.intro}>
            <h2 className={styles.sectionTitle}>The Spacetime Memberships</h2>
            <p>Spacetime (owned, managed and operated by Spacetime Management Private Limited) may provide you services including access to office space, work stations, Internet access, office equipment, event space, knowledge resources, and other services as Spacetime may provide from time to time (collectively, &ldquo;Services&rdquo;). These Services at all times are subject to certain Terms. The following paragraphs outline the Terms Of Use (TOUs) on which SPACETIME grants Membership to the Member(s). These Terms of Use may be somewhat lengthy, but we want to be careful to ensure that everyone is adequately protected. These TOUs need to be agreed to by you before you can commence your Membership. If there is anything that you do not agree with or do not understand please do not accept them and contact us at <a href="mailto:hello@myspacetime.in" className={styles.link}>hello@myspacetime.in</a> so we can try to address your concerns.</p>
            <p>Spacetime reserves the right to update the TOUs at any time. Spacetime will attempt to contact you to notify you of any updates within 30 days of their enactment using the contact information provided in the Membership Agreement.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>1. Definitions</h2>
            <p>In these Terms, the following definitions apply:</p>
            <ul className={styles.definitionList}>
              <li><strong>Deposit</strong> means the deposit equal to two month&rsquo;s Fees, payable to us prior to commencing your Membership.</li>
              <li><strong>Fees</strong> means the fees specified as applicable to your Membership, as may be varied by us from time to time in accordance with the agreement.</li>
              <li><strong>Member</strong> means a person granted Membership by us.</li>
              <li><strong>Membership</strong> means the membership level selected by you.</li>
              <li><strong>Guest</strong> means a person or persons that are visiting a member for a period not to exceed one workweek.</li>
              <li><strong>Minimum Notice</strong> means the minimum period of notice to terminate your Membership, as mentioned in your contract.</li>
              <li><strong>Our Property</strong> means any furniture, equipment, documents or other property in the Space that is owned or controlled by us.</li>
              <li><strong>Policies</strong> mean any of our codes of conduct, policies and procedures accessible on our website or otherwise made available to you, as added or amended by us from time to time.</li>
              <li><strong>Website</strong> means our website located at <a href="https://www.myspacetime.in" className={styles.link} target="_blank" rel="noopener noreferrer">www.myspacetime.in</a>.</li>
              <li><strong>Services</strong> mean the services included in your Membership as identified on the Website, as updated and amended by us from time to time.</li>
              <li><strong>Space and Premises</strong> means the buildings and facilities where our coworking space is located at the address listed on the Website.</li>
              <li><strong>Your Property</strong> means any equipment, documents, property or possessions that you bring into the Space.</li>
            </ul>

            <h3 className={styles.subHeading}>General Terms and Conditions</h3>
            <p><strong>Complete and Binding Agreement.</strong> All preliminary negotiations between the Parties are merged into and superseded by, the terms of this agreement. Any modification to this agreement must be in writing, signed by both Parties.</p>
            <p>Apart from the terms and conditions specified hereunder, a separate contract letter would be issued to each member / client clearly specifying the space allocated, the membership fee, the security deposit, the membership period, the lock-in period (if any), the termination options and any other specific terms of contract. In case of a contract between Spacetime and another Firm / Company / Entity, the contract would also include a list of the members / authorized users.</p>
            <p><strong>Member Rights in the Premises.</strong> Member(s) may share all of the common spaces (e.g., cafe lounge, hallways, and restrooms) in the Premises equally with the other members. Members cannot sublease space nor resell any services already offered by Spacetime. This includes, and is not limited to, sharing, gifting, or reselling meeting room hours.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>2. The Membership</h2>
            <p>Memberships mean all memberships that provide access to the space and services including day pass holders, monthly memberships, annual memberships or memberships for any other period whether with or without lock-in period.</p>
            <p>We will endeavour to provide the Services to the best of our ability. We value your feedback, and if we are not meeting your expectations please let us know so that we can try to find a way of addressing this.</p>
            <p>Your Membership is personal to you. You may not transfer your Membership to someone else without us agreeing to it in writing first.</p>
            <p>Membership includes self service of Tea / Coffee, access to high speed WiFi internet connection, one hundred complimentary black &amp; white prints per member per month and two hours of complimentary conference room usage per member per month.</p>
            <p>Conference rooms need to be booked in advance and would be subject to availability. Once the complimentary period runs out, they would be charged @ Rs. 750 per hour for the six seater and Rs. 1000 per hour for the 8 seater.</p>
            <p>Access would be provided to member guests for office meetings upon prior intimation. It is the member&rsquo;s responsibility to ensure that the guests are appropriately profiled and follow all rules and regulations. Any tea / coffee consumed by the guests would be on chargeable basis.</p>
            <p>Sharing a key / security code with a non-member is strictly prohibited and is grounds for immediate cancellation of your membership. We can provide temporary access codes for guests upon request.</p>
            <p>You agree to comply with your obligations under these Terms, and with any additional obligations contained in any of our Policies.</p>
            <p>We are not responsible for any property you leave behind in the Premises. It is your responsibility to ensure that you have retrieved all of your personal items prior to leaving. Prior to the termination or expiration of your Membership, you must remove all of your property from the Premises. After providing you with reasonable notice, we will be entitled to dispose of any property remaining in the Premises, and you waive any claims or demands regarding such property or our handling of such property. You will be responsible for paying any fees reasonably incurred by us regarding such removal.</p>
            <p>Spacetime reserves the right at all times to disclose any information about you, your participation in and use of the Services as Spacetime deems necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, at Spacetime&rsquo;s sole discretion.</p>
            <p><strong>Confidentiality</strong> — You acknowledge and agree that during your participation in and use of the Services, you may be exposed to Confidential Information. &ldquo;Confidential Information&rdquo; shall mean all information, in whole or in part, that is disclosed by Spacetime, or any participant or user of the Services or any employee, affiliate, or agent thereof, that is nonpublic, confidential or proprietary. Confidential information also includes, without limitation, information about the business, sales, operations, know-how, trade secrets, technology, products, employees, customers, marketing plans, financial information, services, business affairs, any knowledge gained through examination or observation of or access to the facilities, computer systems and/or books and records of Spacetime or, any analyses, compilations, studies or other documents prepared by Spacetime, or otherwise derived in any manner from the Confidential Information and any information that you are obligated to keep confidential or know or has reason to know should be treated as confidential.</p>
            <p>Your participation in and/or use of the Services obligates you to: maintain all Confidential Information in strict confidence; not disclose Confidential Information to any third parties; and not use the Confidential Information in any way directly or indirectly detrimental to Spacetime, or any participant or user of the Services.</p>
            <p>All Confidential Information remains the sole and exclusive property of Spacetime or the respective disclosing party. You acknowledge and agree that nothing in this TOU or your participation or use of the Services will be construed as granting any rights to you, by license or otherwise, in or to any Confidential Information or any patent, copyright or other intellectual property or proprietary rights of Spacetime.</p>
            <p><strong>Participation In or Use of Services</strong> — You acknowledge that you are participating in or using the Services at your own free will and decision. You acknowledge that Spacetime does not have any liability concerning your access, participation in, use of the Services, or any loss of information resulting from such participation or use.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>3. The Space</h2>
            <p>The entrance to the premises is access controlled and entry is only permitted for members, member guests, management and support staff.</p>
            <p>The Space is a shared office and we ask that you consider other Members and use the Space in a respectful way. Offensive language, threatening behaviour, abuse of our staff or other Members and damage to Our Property, or that of another Member, will not be acceptable or tolerated. We reserve the right to remove offenders from the Space, and suspend or cancel their Membership.</p>
            <p>Members working in the Space must respect the right of others to have &ldquo;quiet enjoyment&rdquo; of the Space and keep personal telephone conversations to a low level and only listen to personal music via headphones. A Private enclosed space is provided for personal telephone conversations and Members are encouraged to use it. Excessive noise that disturbs other occupants will not be acceptable and proper decorum must be maintained at all times.</p>
            <p>No sexual harassment / abuse or racial abuse would be tolerated in the premises and strict action would be taken against any offenders as per the law.</p>
            <p>Lockable Cabins, Manager&rsquo;s Rooms and other Private Offices are under access control and are out of bounds except for coworkers authorized to use them. Please do not enter these spaces in case you are not authorized.</p>
            <p>Common areas except restrooms are under 24 hour CCTV surveillance for security purposes.</p>
            <p>The entire area has been fitted with smoke detectors attached to a fire alarm system. There is a clearly marked external fire exit near the restrooms. Another fire exit staircase exists next to the lift. Members must appraise themselves of all possible ways to exit the premises in case of fire.</p>
            <p><strong>Cleanup</strong> — The Spacetime Management shall ensure that the entire space is cleaned multiple times a day and kept hygienic. Cleanliness is essential, but especially in coworking spaces. With coworkers sharing one big space, please ensure your temporary flex or permanent workstation is clean and tidy before you leave. Don&rsquo;t forget to toss your coffee cup and space napkins, either. Please leave your shared / common spaces like the pantry, Cafe and restrooms clean post using them. Same for the booked spaces including boardrooms etc.</p>
            <p><strong>Common Sense in the Common Space</strong> — As a general rule, treat the space like how you want your home to be treated. This means eating only in designated areas, brushing up on the visitor policy, not taking items that are not yours, screaming in the hallways etc. While this should go without saying, avoid discriminatory behavior and harassment toward your fellow members &mdash; it&rsquo;s their space too!</p>
            <p><strong>Respect Boundaries</strong> — Please be mindful of other people&rsquo;s space. While our flex seating is assumed to be shared, a permanent desk is off-limits. If you see someone wearing headphones or immured at work, don&rsquo;t distract them.</p>
            <p><strong>Contribute to your community</strong> — While Spacetime becomes an ambassador for you as soon as you sign-up, we strongly encourage our members to network, introduce yourself and what brings you to Spacetime. Welcome to our work family.</p>
            <p>The Space is a collaborative workspace, and you may find that you are working in close proximity to individuals or organisations that compete with your business. It is your responsibility to ensure that any obligations you may have regarding proximity and/or confidentiality with respect to such competing organisations and other Members generally are adhered to.</p>
            <p>You acknowledge that due to the shared nature of the Space, sensitive information may sometimes be overheard, and you agree to respect the right of privacy and confidentiality of other Members in such circumstances.</p>
            <p>Where your Membership entitles you to access the Space, this is a licence to use the Space, and does not give you an exclusive right to any part of the Space. You are responsible for ensuring that the Space meets the needs of your business or enterprise. We make no warranties or representations that the Space is suitable for the purpose you intend to use it for.</p>
            <p>We ensure that Our Property is maintained in a good condition and complies with any applicable legal or other regulatory requirements. It is your responsibility to ensure that Your Property is fit for purpose and is used in a safe manner. You must ensure that any electrical equipment you bring into the Space is inspected and tested in accordance with applicable standards in India.</p>
            <p>You acknowledge that you will be liable for, and agree to indemnify us for any damage caused to the Space or Our Property, or for any claim brought against us, by malfunctioning or incorrectly used equipment brought into the Space by you, your employees or your guests.</p>
            <p>You are responsible for making good or indemnifying us (and do hereby authorise us to charge you) for any damage caused to the Space or Our Property by you, your employees or your guests (excluding fair wear and tear).</p>
            <p>We take all reasonable measures to ensure the Space is a safe and healthy working environment. You are responsible for your own safety (and that of your employees and guests) whilst in the Space.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>4. Use of the Space</h2>
            <p>Spacetime would be open for members from Monday to Saturday between 09:30 am till 06:30 pm except on national holidays / government mandated holidays, a list of which would be duly circulated. As far as possible, all efforts would be made to provide members with admin support on holidays and during after hours.</p>
            <p>The membership fee includes use of designated / common space and services during the office hours with an additional free allowance of 1.5 extra hour. For work beyond 8:00 pm members would be charged. The charge to keep the office open beyond 8:00 pm would be Rs. 1500 per hour in the months between October till March and Rs. 2000 per hour in the months between April till September. These charges would be shared between entities/members overstaying on a prorated basis. A similar charge would be applicable in case the space is opened on a Sunday on specific request.</p>
            <p>Members must only use the Space for office purposes unless they have obtained prior written consent from the Spacetime management.</p>
            <p>If your Membership allows you 24/7 access this does not allow you to sleep on the premises.</p>
            <p>Any consumption of food / snacks (except tea / coffee) can only be done in the Cafe. Consumption of food is strictly prohibited in the conference / board rooms.</p>
            <p>Smoking is prohibited on the premises, including balconies, at all times. Smoking is only allowed in the area outside the fire exit.</p>
            <p>Use of personal peons / support staff would only be permitted in case it is approved by the Spacetime Management.</p>
            <p>Members must not conduct an auction or sale on the premises or use the premises for any medical or retail activities or other nature involving frequent use by or visits from members of the public.</p>
            <p>Permanent members and private office holders may use the premises address as their business mailing address, however mail must be collected within 45 days or it will be returned to sender and no responsibility for lost or re-directed mail will be accepted by Spacetime.</p>
            <p><strong>No Unlawful or Prohibited Use</strong> — As a condition of your use of the Services, you will not use the Services for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the Services in any manner that could damage, disable, overburden, or impair any Spacetime server, or the network(s) connected to any Spacetime server, or interfere with any other party&rsquo;s use and enjoyment of any Services.</p>
            <p>The Spacetime IT policy would be shared with you which shall govern what all you would be allowed to access using the shared WiFi.</p>
            <p>Pets are not allowed into the premises.</p>
            <p>You agree that when participating in or using the Services, you will not: resell, share or gift any Member credits; use the Services in connection with contests, pyramid schemes, chain letters, junk email, spamming or any duplicative or unsolicited message; defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, obscene, indecent or unlawful topic, name, material or information; upload files that contain viruses, Trojan Horses, worms, time bombs, corrupted files, or any other similar software; download, access or upload any pornographic material; or create a false identity to mislead others.</p>
            <p>Monthly credits expire at the end of the calendar month and do not roll over to the next month.</p>
            <p>Members may not make any alterations or additions to, or put up any partitions or wall coverings on, any part of Space without prior consent from Spacetime.</p>
            <p>Members must not bring any explosive or flammable or corrosive fluids or chemicals into the Premises.</p>
            <p>Members must not use the premises for any illegal or immoral activity and agree to make good any loss to Spacetime in case they are in violation.</p>
            <p><strong>Disclaimer of Warranties</strong> — To the maximum extent permitted by applicable law, Spacetime provides the services &ldquo;as is&rdquo; and with all faults, and hereby disclaim with respect to the services all warranties and conditions, whether express, implied or statutory.</p>
            <p>To the extent permitted by law, the aggregate monetary liability of Spacetime to you for any reason and for all causes of action will not exceed the total amounts paid by you to us under these Terms for the product or service from which the claim arose in the twelve (12) months prior to the claim arising.</p>
            <p><strong>Indemnification</strong> — You release, and hereby agree to indemnify, defend and save harmless Spacetime and its subsidiaries, affiliates, divisions, and their past, present and future officers, agents, shareholders, members, representatives, employees, successors and assigns, jointly and individually, from and against all claims, liabilities, losses, damages, costs, expenses, judgments, fines and penalties based upon or arising out of your negligent actions, errors and omissions, willful misconduct and fraud in connection with the participation in or use of the Services.</p>
            <p><strong>Severability</strong> — In the event that any provision or portion of this TOU is determined to be invalid, illegal or unenforceable for any reason, in whole or in part, the remaining provisions of this TOU shall be unaffected thereby and shall remain in full force and effect to the fullest extent permitted by applicable law.</p>
            <p><strong>Insurance</strong> — Spacetime will carry Business Personal Property insurance. As a user, it is strongly suggested that you take an Insurance policy to cover your equipment while using our space.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>5. Making Changes or Cancelling</h2>
            <p>We may amend these Terms at any time by providing written notice. If we choose to do so, we will inform you in writing.</p>
            <p>You may change your personal and billing information and change or cancel your Membership by informing us in writing. You must do this at least 30 days prior to the day you require the change or cancellation to take effect.</p>
            <p>We may cancel your Membership with immediate effect if you: breach your obligations; fail to pay the Fees within 7 days of notice; or fail to comply with our Policies after written notice and a reasonable time to rectify the failure.</p>
            <p>Unless your contract has a lock-in period, you may cancel the membership by emailing a notice of cancellation to <a href="mailto:hello@myspacetime.in" className={styles.link}>hello@myspacetime.in</a> or speaking with an authorized representative at any time during office hours. Every open ended membership which is for a period of one month or more would require a one month notice for cancellation. A refund of the security deposit net of any Cancellation Fee will be made to your original mode of payment.</p>
            <p>Either party may cancel your Membership at any time by providing the other party with at least the Minimum Notice of 30 days. In case your contract has a lock in period, the unexpired lock in period would be the Minimum Notice Period.</p>
            <p>We will refund to you the Deposit within 7 days of termination of your Membership for any reason. We reserve the right to deduct from the Deposit any amounts owed to us by you, including any outstanding Fees.</p>
            <p>Cancellations for boardrooms are completely refundable if the booking is cancelled up to 48 hours prior to the booking date. Cancellations made after this time forfeit a 50% booking fee.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>6. Membership Fees</h2>
            <p><strong>Monthly Membership Dues</strong> — The monthly fee will be due on the first day of each month and is late if received after the 5th of the month. You agree to pay the monthly membership amount for the complete duration of your term. Failure to pay your membership fees may result in a submission of a negative credit report to reporting agencies. Furthermore, after the second late payment, Spacetime reserves the right to terminate the agreement and deny access.</p>
            <p>We will provide you with the Services in consideration for you paying the Fees.</p>
            <p>Unless otherwise agreed between us, we only accept payment of the Fees by automatic direct debit from a credit card nominated by you (Visa or Mastercard). The Fees will be debited monthly in advance from your nominated account and will continue to be debited until your Membership ends. Alternatively, you may deposit the amount in the Spacetime Account the details of which shall be provided.</p>
            <p>It is your responsibility to ensure that your payment details are kept up to date and that there are sufficient funds in your nominated account. Late payment of fees will also incur interest charges of 15% per annum and you may be subject to a lock out of the space if overdue payments are not rectified within 3 business days.</p>
            <p>Unless you are notified otherwise, the Fees and any other prices referenced on our Website are quoted exclusive of GST. Invoices would be raised on the 1st of every month as per the billing / GST details provided by you.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>7. Meeting Spaces, Venue Hire and Printing</h2>
            <p>Meeting rooms are available in the Space for use by Members based on availability and all meeting rooms must be booked in advance. If meeting room credits are included in your Membership these are not transferrable to another member and cannot be rolled over from month to month.</p>
            <p>A credit card must be left on file for all meeting room bookings and the room must be returned to the original condition it was in prior to the booking. Any damage to the fixtures and fittings, walls, doors or AV system will be charged back to the client.</p>
            <p>Meeting Spaces are charged for the time booked and reservations are not considered to be confirmed until full payment has been made.</p>
            <p>Meeting spaces booked outside of staffed hours (9:30 am–6:30 pm, Monday to Friday) may incur an extra Rs. 500 per hour staffing fee at the discretion of management.</p>
            <p>Meeting rooms are for members and clients to use for meetings; they are not to be used to house member&rsquo;s guests who wish to work for the day.</p>
            <p>100 black and white prints/copies per month are included in each monthly/Permanent Membership. Flexible members receive 50 copies per month. Extra prints are charged @ Rs. 2 for A4 and Rs. 4 for A3 and will be billed to your Membership at the end of each month.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>8. Signage</h2>
            <p>As a shared workspace we cannot accommodate signage for every permanent tenant, however tenants who hold a private office may be permitted to display signage within their office pursuant to the approval of management. Requests for signage must be made to management for approval prior to installation and any damage to walls or fixtures/fittings from signage must be remedied by the member or be billed by Spacetime for any works required to return the space to its original condition.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>9. Car Parking</h2>
            <p>Spacetime has a limited number of carparks that are available for lease on a short term (month to month) or long term basis. Members may contact the management for charges and other details. Spacetime does not own or manage the car park and accepts no liability or responsibility for any theft or damages incurred whilst parking. The car park is handled by the building&rsquo;s managing society.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>10. Fair Use by Members</h2>
            <p>We can only provide the Services for the Fees quoted if Members use the Space fairly. We believe that using the Space fairly means that you:</p>
            <ul className={styles.list}>
              <li>Only use the Space for the number of days per month and during the times allocated to your Membership.</li>
              <li>Limit the number of guests you bring into the Space. For guest access on weekends, 24 hours notice is required in writing to <a href="mailto:hello@myspacetime.in" className={styles.link}>hello@myspacetime.in</a> and is subject to approval from the Management.</li>
              <li>Limit printing to a reasonable amount (and reduce wastage by printing in B&amp;W and double-sided where possible).</li>
            </ul>
            <p>You must not use the internet access provided for excessive downloads, streaming purposes or for any illegal purpose.</p>
            <p>Guests must register prior to accessing the space and may only access the space during staffed business hours Monday to Saturday 9:30 am – 6:30 pm unless otherwise agreed in writing by management.</p>
            <p>Continued abuse of the fair use requirements in this clause may result in the suspension or termination of your Membership.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>11. Technology</h2>
            <p>We may need to install software onto your computer, tablet, mobile device or other electronic equipment to provide you with the Services. You acknowledge that your refusal to install such software may affect your ability to properly receive the Services you have purchased. We may also provide you with technical support at your request.</p>
            <p>You must not use the internet access provided for excessive downloads, streaming purposes or for any illegal purpose. You hereby indemnify us against any liability associated with the misuse of our technology and internet systems by you, your employees or your guests.</p>
            <p>Should you require any IT setup that is outside the normal scope of what is already provided in the Space and requires us to engage external IT contractors, you will be charged for the same.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>12. Security &amp; Confidential Information</h2>
            <p>Confidential Information includes information relating to either party&rsquo;s business, employees, clients, products and business processes. Any Confidential Information you give us, or we give you, remains confidential. We have adequate policies and procedures in place to protect Confidential Information you disclose to us and you agree to take reasonable care to protect any Confidential Information we may disclose to you and not disclose it to any third party.</p>
            <p>You are responsible for ensuring that your Confidential Information, and that of any of your employees, remains secure within the Space. We will not be liable for any unauthorised disclosure of your Confidential Information, unless such disclosure occurs as a result of a breach of our confidentiality obligations to you.</p>
            <p>We make no representations about the security of our internet connection, and you must take reasonable security measures (i.e. encryption) as are necessary for your business or enterprise.</p>
            <p>A door access code is needed by all Members to access the Space outside of staffed hours and will be issued with your Membership. To ensure security in the Space you must not lend your access key to any other person, and must notify us immediately if it is lost or stolen.</p>
            <p>You may be required to present a valid, government-issued photo identification in order to gain access to our Premises. For security purposes, we may regularly record via video certain areas of our Premises.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>13. Liability and Insurance</h2>
            <p>We may maintain an insurance policy that covers the Space and its contents. Our contents insurance does not extend to Your Property or the property of your guests. You should make your own insurance arrangements to ensure that Your Property and any other liabilities are covered.</p>
            <p>Our staff oversee the Space during business hours (9:30 am – 8:00 pm), Monday to Saturday, (excluding public holidays), however we do not accept responsibility for loss or damage to any of Your Property left unattended or unsecured in the Space.</p>
            <p>Our liability to you for breach of these Terms will be capped at an amount equal to the Fees that you have paid in the 1 month prior to the claim arising. We will not be liable for any indirect or consequential loss, including any loss of actual or anticipated business, income or loss of opportunity.</p>
            <p>You will indemnify us for any loss incurred by us or any claim against us resulting from a breach of these Terms or any action of your employees or guests you bring into the Space.</p>
            <p>We are not liable for actions of other individuals. We do not control and are not responsible for the actions of other individuals using the Services at our Premises.</p>
            <p>In case of any dispute, the courts of the state of Delhi would have jurisdiction.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>14. Third Party Products or Services</h2>
            <p>We do not have liability for third party products or services. The Services may provide you with access to third party products or services. We are not responsible for the content of these advertisements or any links, products, services or other materials relating to any third party products, services, advertisements or other materials.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>15. Things Out of Our Control</h2>
            <p>Sometimes events happen that are out of our control. These include things like strikes, lock outs, accidents, war, fire or the delay or failure in manufacture, production, or supply by third parties of equipment or services. In such cases both parties agree that the other party will not be liable for any delay or failure in performing their obligations. Either party may terminate the Membership if the delay or failure continues for a period of 30 days or more.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionNum}>16. COVID-19 Policy</h2>
            <p>Spacetime is committed to ensuring the health and safety of its members and external visitors in the licensed and public spaces of Spacetime. We keep the space sanitized and hygienic and have placed hand sanitizers at various places. Care has been taken to substitute many activities with touch free operation to minimize risk.</p>
            <p>This policy sets out the minimum steps that the Organisation is taking in order to manage the coronavirus situation, alongside expectations that are placed upon you to help us make the space as safe as possible. Non-compliance with these measures may result in management denying access to the space of a member, or member organisation, or a cancellation of membership.</p>
            <h3 className={styles.subHeading}>COVIDSafe Principles</h3>
            <ol className={styles.list}>
              <li>Ensure physical distancing</li>
              <li>Wear a face covering</li>
              <li>Practise good hygiene</li>
              <li>Keep records and act quickly if workers become unwell</li>
              <li>Avoid interactions in enclosed spaces</li>
              <li>Create workforce bubbles</li>
            </ol>
            <p>Please ensure that members from your team who develop symptoms are immediately sent back and only allowed in once they produce a COVID negative report. Please ensure that the other members of your team who came in proximity with the infected person / persons are immediately tested and the results shared.</p>
            <h3 className={styles.subHeading}>COVID-19 Infection Control Measures</h3>
            <ul className={styles.list}>
              <li>Daily cleaning and disinfecting.</li>
              <li>Signage promoting safe social distancing is displayed throughout the Space.</li>
              <li>Clinical grade hand sanitiser is provided at all entry points to the space.</li>
              <li>Frequently touched surfaces are regularly cleaned.</li>
              <li>External guests will be required to have their temperature tested via an infrared touch-free thermometer before being granted access to the space.</li>
            </ul>
            <h3 className={styles.subHeading}>WHO Recommendations</h3>
            <p>We strongly encourage you to follow guidelines from the World Health Organisation on infection control, including: frequently cleaning your hands; when coughing and sneezing, covering your mouth and nose with flexed elbow or tissue; and avoiding close contact with anyone who has a fever and cough.</p>
            <h3 className={styles.subHeading}>If You Have Contracted the Virus</h3>
            <p>If you begin to display symptoms of the virus, you must follow Government guidance, seek medical attention and notify management at the earliest opportunity. In order to protect your fellow co-workers, you are required to remain completely absent from the space. You are required to get a COVID-19 medical clearance prior to returning to the workspace.</p>
            <h3 className={styles.subHeading}>Self-Isolation</h3>
            <p>You must not attend the space during any self-isolation period that the Government requires you to undertake.</p>
            <h3 className={styles.subHeading}>Harassment / Bullying</h3>
            <p>The organisation operates a zero tolerance policy to all forms of harassment and bullying in the workplace. We will not tolerate any unacceptable behaviour to colleagues, suppliers, members of the public etc. Any complaints of this nature will be investigated in line with our usual policy and may result in action, up to and including cancellation of your rights to work at the space.</p>
            <h3 className={styles.subHeading}>Your Privacy</h3>
            <p>The organisation is committed to your privacy. Your personal information or circumstances related to the COVID-19 situation will not be shared outside the company. All information shared by you will be treated with care and secrecy.</p>
            <h3 className={styles.subHeading}>Ongoing Communication</h3>
            <p>The organisation will issue regular updates (or when Government directives change) in order to keep you informed of all matters relating to the current situation at all times. If you have any questions or queries relating to this policy, please feel free to contact us at <a href="mailto:hello@myspacetime.in" className={styles.link}>hello@myspacetime.in</a>.</p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
