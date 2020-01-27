---
layout: default
subnav: subnav_blog.md
title: Contexts vs. Labels
---
# Understanding Contexts vs. Labels

A new feature with Liquibase 3.3 is "labels". Labels are similar to contexts in that both allow you to chose a subset of changeSets to execute at runtime. Labels are also similar to contexts in that both are purposely vague terms because they are fairly generic features can enable many different use cases. Where they differ is in who has the power to specify complex logic: the changeSet author or the deployment manager.

### Contexts

Liquibase contexts have been available for quite a while, and they started out primarily as a way of "tagging" changeSets so they can be chosen at runtime. 
One common use is to mark changeSets that insert test data as context="test" so that in your development and QA environments you you can run liquibase 
with `--contexts=test` to get the test data and in production you run with `--contexts=prod` to not have test data. Contexts are also helpful for marking 
changeSets based on feature sets to include (context="shoppingCart") or bundle (context="pro") or even customer (context="acme_inc"). For complex cases, 
multiple contexts can be applied to a changeSet such as context="acme_inc, pro" and multiple contexs can be chosen at runtime such as `--contexts=free,qa`.

With Liquibase 3.2, support was added to for context expressions in changeSets. Now, when you are defining your changeSet you can specify complex logic 
such as context="!test" or context="qa or (acme_inc and dev)". The context logic can only be specified in your changeSet definition, however. When running 
Liquibase, you can still specify multiple contexts, but you are just listing out all the contexts that apply to the current Liquibase run.

### Labels

Labels were added in Liquibase 3.3 to work like contexts, but "backwards" in who can specify logical expressions. In your changeSet you can only specify a 
simple list of "labels" that apply to the changeSet but at runtime you can write a complex expression to chose the labels you want to execute. This allows 
you to specify a changeSet with labels="qa, acme_inc" and then at runtime use expressions such as `--labels="!acme_inc"` or `--labels="pro or (free and beta)"`.

### Which is right for you?

Whether you should use contexts or labels comes down to whether the changeSet writer or the Liquibase executor best understands and/or needs the most control over which changeSets to execute.

- If the changeSet author needs to be able to specify complex logic based on the kind of environment that Liquibase will run in, use contexts.
- If the person executing Liquibase needs to specify complex logic to chose changeSets to run, use labels.
- If you do not use complex expressions, there is no functional difference between them.

Remember: you can use both.

### Example Use Cases

Contexts work best when you can simply enumerate/describe features of the runtime environment:

- Free vs Pro versions
- QA vs. Dev. vs. Prod environments
- Customer A vs. Customer B

Labels work best when you can simply enumerate/describe what a changeSet is for, but the deployment time environment is complex to describe. An example of when 
labels would work well is when you can describe changeSets as for a particular feature or version such as "1.0" and/or "shopping_cart" but the decision on which 
features and/or versions needs to run is complex and chosen at deployment time. Labels in this case would allow you to run with `--labels="1.0 or (1.1 and shopping_cart)"` 
to deploy the 1.0 changeSets and only the 1.1. features related to the shopping cart to one database and `--labels="1.0 or (1.1 and !shopping_cart)"` to another database.

When in doubt, I usually go with contexts because that will simplify deployment configuration (to minimize release-day problems) while giving changeSet authors the 
option to handle complex logic if needed.
