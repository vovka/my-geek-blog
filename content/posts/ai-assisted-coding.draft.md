Usually AI assisted coding, it is applied straight forward, leads to very useful results.

The common mistake is to ask AI create something big without providing details. For example, build me the button to make everything great. AI doesn't know what button, what color, what does the grade mean, and so on.

The first response for this problem is rethinking of prompting. shift from prompt engineering to context engineering. Actually, it is the same, just another name for the same process, the new name underscores that you should focus not on the prompt itself but on context of the model.

The next reply is something called design driven development, or PRD driven development, or requirements driven development. It is implemented in such frameworks as speckit, bmad and others.

My own approach is a bit different. I call it Dissalign document driven development or quadruple D, Dx4 or 4D. 

I claim that we do not, we must not write the code by ourselves anymore. AI does it better already.

We should not ask AI to write some specific code. First, we should create design document. It is a kind of architectural guide. It describes all the aspects of the application. without technical details. Just high-level architecture.

writing this document takes the most development time. We iterate over it, refine it, clarify it, be ready that writing this document takes up to 90% of all time.

Then we ask AI to plan the changes described in this document and after that stick to the plan and code.

if we not start from scratch but Do some improvements, And then we also must start from this design document. We even can implement special instructions for AI to work with changes to this document. For example, instruct AI to check it diff this document, identify what changed and work on that changes automatically.

The described process fine applied to the so-called greenfield project project created from scratch. But if we have a legacy project, we also can apply this approach with some tweaks. We should first create some design documentation for a legacy project. Thanks AI can do it for us pretty well. If a project is too big, we can even split the design document for different layers or maybe aspects of the applications and create the design document for the specific area that we are interested in.

And then we act the same. Start from changes to the design document, then plan, then code.

And once again, coding takes most minor part of the development process. You can forward your energy to high-level architecture and creating new ideas. That is the most impact of AI coding.
