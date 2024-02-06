import UIAccordion from "../ui/UIAccordion";

const Accordion = () => {
  return (
    <section className="p-6">
      <UIAccordion
        id="exampleAccordion"
        items={[
          { id: "item1", label: "Form", type: "fieldset" },
          { id: "item2", label: "Default 1" },
          { id: "item3", label: "Default 2" },
        ]}
        fieldsetContent={
          <>
            <fieldset>
              <p>
                <label htmlFor="name" className="text-md font-medium">
                  Name
                  <span aria-hidden="true">*</span>:<br></br>
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  aria-required="true"
                  className="rounded border-[1.3px] border-[#121315]"
                />
              </p>
              <p>
                <label htmlFor="email" className="text-md font-medium">
                  Email
                  <span aria-hidden="true">*</span>:<br></br>
                </label>
                <input
                  type="text"
                  name="Email"
                  id="email"
                  aria-required="true"
                  className="rounded border-[1.3px] border-[#121315]"
                />
              </p>
            </fieldset>
          </>
        }
        defaultContent={<p>This is the default content.</p>}
        containerStyle="bg-gray-50 w-[15em] p-2 rounded shadow-md"
        buttonStyle="inline-flex items-center justify-center text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        labelStyle="mx-2"
        fieldsetStyle="mb-2"
      />
    </section>
  );
};

export default Accordion;
