import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("Example spec", () => {
  it("mount from inline template should work", () => {
    const wrapper = mount({
      template: `
        <h1>{{ msg }}</h1> 
      `,
      props: ["msg"],
    }, { props: { msg: "Example" } });

    expect(wrapper.text()).toContain("Example");
  });
});
