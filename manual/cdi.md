====== JEE CDI Integration ======

Liquibase can be run in a [JEE CDI](http://seamframework.org/Weld) environment by implementing a number of CDI Procducers methods. The CDI Liquibase integration is a simple CDI extension that performs a Liquibase update when the CDI container boots



===== How to Configure Liquibase =====

<code java>
/**
 * A Simple CDI Producer to configure the CDI Liquibase integration
 *
 */
public class LiquibaseProducer {

    @Resource
    private DataSource myDataSource;

    @Produces @LiquibaseType
    public CDILiquibaseConfig createConfig() {
        CDILiquibaseConfig config = new CDILiquibaseConfig();
        config.setChangeLog("liquibase/parser/core/xml/simpleChangeLog.xml");
        return config;
    }

    @Produces @LiquibaseType
    public DataSource createDataSource() throws SQLException {
        return myDataSource;
    }

    @Produces @LiquibaseType
    public ResourceAccessor create() {
        return new ClassLoaderResourceAccessor(getClass().getClassLoader());
    }

}
</code>


===== CDILiquibaseConfig Available Attributes =====

  * changeLog
  * contexts
  * parameters
  * defaultSchema
  * dropFirst //since 2.0.2//

If you don't want Liquibase to run you can configure the follow system property liquibase.should.run=false